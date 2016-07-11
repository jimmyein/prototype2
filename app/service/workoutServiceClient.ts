import { Injectable } from '@angular/core';
import {HttpServiceBase} from './HttpServiceBase';
import {GuidedWorkoutService} from './guidedWorkoutService';
import {User} from "../model/User";

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class WorkoutServiceClient {
    private queryWorkoutApi = "api/workout/queryWorkout";

    constructor(private httpServiceBase: HttpServiceBase,
        private guidedWorkoutService: GuidedWorkoutService) {
    }

    public queryWorkout(count?: number, pageNumber?: number, queryFilter?: string, queryValue?: string): Promise<Object> {
        var queryWorkoutUrl = this.httpServiceBase.urlConstructor(this.queryWorkoutApi, {key: "token", value: false},
        { key: "count", value: count }, { key: "pageNumber", value: pageNumber }, {key: queryFilter, value: queryValue});

        return this.httpServiceBase.apiGet(queryWorkoutUrl,
            data => {
                this.guidedWorkoutService.setGuidedWokrouts(data);
            },
            true
        );
    }

}