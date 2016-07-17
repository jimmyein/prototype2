import { Injectable } from '@angular/core';
import { User } from "../model/User";
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { HttpServiceBase } from './HttpServiceBase';

@Injectable()
export class UserService {
    private getEventUrl = "https://apis.live.net/v5.0/me/events";

    constructor(private http: Http) {
    }

    public getEvent() {
        var baseUrl =
            HttpServiceBase.urlConstructor(this.getEventUrl,
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

    public test() {
        window.alert("test");
    }
}