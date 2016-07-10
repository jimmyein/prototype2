import { Injectable } from '@angular/core';
import {BackendServiceBase} from './backendServiceBase';
import {GuidedWorkoutService} from './guidedWorkoutService';
import {User} from "../model/User";

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class WorkoutServiceClient {
    private getKatTokenApi = "api/Authorization/getkattoken";
    private queryWorkoutApi = "api/workout";

    constructor(private backendServiceBase: BackendServiceBase,
        private guidedWorkoutService: GuidedWorkoutService) {
    }

    public getKatToken(): Promise<Object> {
        return this.backendServiceBase.apiGet(this.getKatTokenApi,
            data => {
                 User.KATToken = data;
            },
            false
        );
    }

    public queryWorkout(count : number = 0, pageNumber: number = 1, query: string = ""): Promise<Object> {
        var queryWorkoutUrl = this.backendServiceBase.urlConstructor(this.queryWorkoutApi, {key: "token", value: false},
        { key: "count", value: count }, { key: "pageNumber", value: pageNumber });

        return this.backendServiceBase.apiGet(queryWorkoutUrl,
            data => {
                this.guidedWorkoutService.setGuidedWokrouts(data);
            },
            true
        );
    }

}