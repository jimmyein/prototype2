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

    constructor(private httpServiceBase: HttpServiceBase,
        private guidedWorkoutService: GuidedWorkoutService) {
    }

    public queryWorkout(count : number = 0, pageNumber: number = 1, query: string = ""): Promise<Object> {
        var queryWorkoutUrl = this.httpServiceBase.urlConstructor(this.queryWorkoutApi, {key: "token", value: false},
        { key: "count", value: count }, { key: "pageNumber", value: pageNumber });

        return this.httpServiceBase.apiGet(queryWorkoutUrl,
            data => {
                this.guidedWorkoutService.setGuidedWokrouts(data);
            },
            true
        );
    }

}