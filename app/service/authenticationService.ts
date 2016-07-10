import { Injectable } from '@angular/core';
import {HttpServiceBase} from './HttpServiceBase';
import { User } from "../model/User";

interface InAppBrowserEvent extends Event {
    url: string;
}

@Injectable()
export class AuthenticationService {
    public user: User;
    private getKatTokenApi = "api/Authorization/getkattoken";
    private loginUrl = "https://login.live.com/oauth20_authorize.srf";
    private redirectUrl = "https://login.live.com/oauth20_desktop.srf";
    private clientID = "000000004811DB42";
    private scope = "service::intkds.dns-cargo.com::MBI_SSL";
    private responseType = "token";


    constructor(private httpServiceBase: HttpServiceBase) {

        this.user = new User();
    }

    private generateLoginUrl(): string {
        var url = this.loginUrl
            + "?client_id="
            + this.clientID
            + "&scope="
            + this.scope
            + "&response_type="
            + this.responseType
            + "&redirect_uri="
            + this.redirectUrl;

        return url;
    }

    public login(): Promise<Object> {
        return new Promise((resolve, reject) => {
            //clearsessioncache=yes,clearcache=yes
            var browserRef = window.open(this.generateLoginUrl(), "_blank", "location=no,closebuttoncaption=Done");
            browserRef.addEventListener("loadstart", (event: InAppBrowserEvent) => {
                if ((event.url).indexOf(this.redirectUrl) != -1) {
                    var parsedResponse = this.parseImplicitResponse(event.url);

                    if (parsedResponse) {
                        User.MSAToken = parsedResponse["access_token"];
                        resolve(parsedResponse);
                    } else {
                        reject("Authentication failed");
                    }

                    browserRef.close();
                }
            });

            browserRef.addEventListener("exit", function (event) {
                reject("The sign in flow was canceled");
            });
        });
    }

    public getKatToken(): Promise<Object> {
        return this.httpServiceBase.apiGet(this.getKatTokenApi,
            data => {
                User.KATToken = data;
            },
            false
        );
    }

    public logoff() {
        //TODO
    }

    public getUser(): User {
        return this.user;
    }

    private parseQueryString(queryString) {
        var qs = decodeURIComponent(queryString),
            obj = {},
            params = qs.split('&');

        params.forEach(function (param) {
            var splitter = param.split('=');
            obj[splitter[0]] = splitter[1];
        });

        return obj;
    }


    private parseImplicitResponse(url: string): Object {
        var parameterMap = {};
        var responseParameters = ((url).split("#")[1]).split("&");
        for (var i = 0; i < responseParameters.length; i++) {
            parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
        }
        if (parameterMap["access_token"] !== undefined && parameterMap["access_token"] !== null) {
            return parameterMap;
        } else {
            return null;
        }
    }
}