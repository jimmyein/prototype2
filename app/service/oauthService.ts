import { Injectable } from '@angular/core';

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class OAuthService {
    public loginUrl: string;
    public clientID: string;
    public scope: string;
    public responseType: string;
    public redirectUrl: string;
    public oauthUrl: string;
    public tokenStore: Storage;
    public access_token: string;

    constructor() {
        this.loginUrl = "https://login.live.com/oauth20_authorize.srf";
        this.redirectUrl = "https://login.live.com/oauth20_desktop.srf";
        // hackathon application ID
        //this.clientID = "1a342a7e-b5cf-450e-9188-4a8970e4af9e";
        // LiveConnectClientId
        //this.clientID= "00000000441304D0";
        // KCloudClientID
        this.clientID = "000000004811DB42";
        //this.scope = "https://outlook.office.com/mail.read https://outlook.office.com/mail.send";
        this.scope = "service::intkds.dns-cargo.com::MBI_SSL";
        this.responseType = "token";
        this.tokenStore = window.sessionStorage;
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

        this.oauthUrl = url;
        return url;
    }

    public login(): Promise<Object> {
        return new Promise((resolve, reject) => {
            //clearsessioncache=yes,clearcache=yes
            var browserRef = window.open(this.generateLoginUrl(), "_blank", "location=no,closebuttoncaption=Done");
            browserRef.addEventListener("loadstart", (event: MyEvent) => {
                if ((event.url).indexOf(this.redirectUrl) != -1) {
                    browserRef.removeEventListener("exit", (event) => { });
                    var parsedResponse = this.parseImplicitResponse(((event.url).split("#")[1]).split("&"));

                    if (parsedResponse) {
                        window.localStorage.setItem("MSA", parsedResponse["access_token"]);
                        resolve(parsedResponse);
                    } else {
                        reject("Having problem authenticating");
                    }

                    browserRef.close();
                }
            });

            browserRef.addEventListener("exit", function (event) {
                reject("The sign in flow was canceled");
            });
        });
    }

    public logoff() {
        //TODO
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


    private parseImplicitResponse(responseParameters: Array<String>): Object {
        var parameterMap = {};
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