import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { User } from "../model/User";

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class BackendServiceBase {
    private fitlistBackendUrl = "http://fitlist.azurewebsites.net/";

    constructor(private http: Http) {

    }

    public apiGet(api: string,
        next: (data) => void,
        jsonResponse: boolean,
        error?: (err) => void,
        complete?: () => void,
        resolveMessage?: string,
        rejectMessage?: string,
        options?: RequestOptions,
        map?: (response) => void): Promise<Object> {

        if (options == undefined || options == null) {
            options = new RequestOptions();
        }

        let params: URLSearchParams = new URLSearchParams();

        options.headers = this.getRequestedHeader();
        var url = this.fitlistBackendUrl + api;

        return new Promise((resolve, reject) => {
            this.http.get(url, options)
                .map(
                response => {
                    return jsonResponse ? response.json() : response.text();
                })
                .subscribe(
                data => {
                    next(data);
                    resolve(resolveMessage);
                },
                err => {
                    error(err);
                    reject(rejectMessage);
                },
                () => {
                    complete()
                });
        });
    }

    public apiPost(api: string,
        body: string,
        jsonResponse: boolean,
        next: (data) => void,
        error?: (err) => void,
        complete?: () => void,
        resolveMessage?: string,
        rejectMessage?: string,
        options?: RequestOptions,
        map?: (response) => void): Promise<Object> {

        if (options == undefined || options == null) {
            options = new RequestOptions();
        }

        options.headers = this.getRequestedHeader();
        var url = this.fitlistBackendUrl + api;

        return new Promise((resolve, reject) => {
            this.http.post(url, body, options)
                .map(
                response => {
                    map(response);
                    return jsonResponse ? response.json() : response.text();
                })
                .subscribe(
                data => {
                    next(data);
                    resolve(resolveMessage);
                },
                err => {
                    error(err);
                    reject(rejectMessage);
                },
                () => {
                    complete()
                });
        });
    }

    public urlConstructor(baseUrl: string, ...params: { key: string; value: any }[]) {
        params.forEach(param => {
            if (baseUrl.indexOf("?") != -1) {
                baseUrl += "&" + param.key + "=" + param.value;
            } else {
                baseUrl += "?" + param.key + "=" + param.value;
            }
        });

        return baseUrl;
    }

    public getRequestedHeader(): Headers {
        var header = new Headers();
        header.append('ZUMO-API-VERSION', '2.0.0');
        var kattoken = User.KatToken;
        var msatoken = User.MSAToken;

        if (msatoken != undefined || msatoken != null) {
            header.append("acess_token", msatoken);
        } else {
            // TODO: Redirect to sign-in page
        }

        if (kattoken != undefined || kattoken != null) {
            header.append("katToken", kattoken);
        } else {
            // TODO: Redirect to sign-in page
        }

        return header;
    }

}