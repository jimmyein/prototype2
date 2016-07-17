import { Injectable } from '@angular/core';
import { User } from "../model/User";
// import { HttpServiceBase } from './HttpServiceBase';
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {
    private getEventUrl = "https://apis.live.net/v5.0/me/events";

    constructor(private http: Http) {
    }

    public getEvent() {
        var baseUrl =
            this.urlConstructor(this.getEventUrl,
                { key: "access_token", value: User.MSAServiceToken });
        window.alert(baseUrl);
        this.http.get(baseUrl)
            .map(
            data => {
                return data.json();
            })
            .subscribe(
            response => {
                window.alert(response);
                return response;
            }
            );
    }

     public urlConstructor(baseUrl: string, ...params: { key: string; value: any }[]) {
        params.forEach(param => {
            if (param.value != undefined || param.value != null) {
                if (baseUrl.indexOf("?") != -1) {
                    baseUrl += "&" + param.key + "=" + param.value;
                } else {
                    baseUrl += "?" + param.key + "=" + param.value;
                }
            }
        });

        return baseUrl;
    }
}