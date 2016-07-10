import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

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

        this.appendHeaderCredential(options);
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

        this.appendHeaderCredential(options);
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

    // default header to call our mobile api
    private appendHeaderCredential(options: RequestOptions): void {

        var header = new Headers();
        var kattoken = window.localStorage.getItem("KatToken");
        var msatoken = window.localStorage.getItem("MSA")
        header.append('ZUMO-API-VERSION', '2.0.0');
        if (msatoken != undefined || msatoken != null) {
            header.append("acess_token", msatoken);
        }

        if (kattoken != undefined || kattoken != null) {
            header.append("katToken", kattoken);
        }

        if (options.headers == undefined || options.headers == null) {
            options.headers = header;
        } else {
            options.headers.append('ZUMO-API-VERSION', '2.0.0');
            options.headers.append("acess_token", window.localStorage.getItem("MSA"));
        }
    }

}