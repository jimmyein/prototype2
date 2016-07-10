import { Injectable } from '@angular/core';
import {HttpServiceBase} from './HttpServiceBase';
import {GuidedWorkoutService} from './guidedWorkoutService';
import {User} from "../model/User";

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class WorkoutServiceClient {
    private getKatTokenApi = "api/Authorization/getkattoken";
    private queryWorkoutApi = "api/workout";

    constructor(private HttpServiceBase: HttpServiceBase,
        private guidedWorkoutService: GuidedWorkoutService) {
    }

    public getKatToken(): Promise<Object> {
        return this.HttpServiceBase.apiGet(this.getKatTokenApi,
            data => {
                 User.KATToken = data;
            },
            false
        );
    }

    public queryWorkout(count : number = 0, pageNumber: number = 1, query: string = ""): Promise<Object> {
        var queryWorkoutUrl = this.HttpServiceBase.urlConstructor(this.queryWorkoutApi, {key: "token", value: false},
        { key: "count", value: count }, { key: "pageNumber", value: pageNumber });

        return this.HttpServiceBase.apiGet(queryWorkoutUrl,
            data => {
                this.guidedWorkoutService.setGuidedWokrouts(data);
            },
            true
        );
    }

}