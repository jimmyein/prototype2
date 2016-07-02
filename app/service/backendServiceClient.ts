import { Injectable } from '@angular/core';
import {BackendServiceBase} from './backendServiceBase';

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class BackendServiceClient {
    private getKatTokenApi = "api/Authorization";

    constructor(private backendServiceBase: BackendServiceBase) {

    }

    public getKatToken(): Promise<Object> {
        return this.backendServiceBase.apiGet(this.getKatTokenApi,
            data => {
                window.localStorage.setItem("KatToken", data);
            }
        );
    }

}