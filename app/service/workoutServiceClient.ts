import { Injectable } from '@angular/core';
import { HttpServiceBase } from './HttpServiceBase';
import { GuidedWorkoutService } from './guidedWorkoutService';

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class WorkoutServiceClient {
    private getExercisesAPIBase = "api/workout/GetExercises";
    private searchWorkoutPlansAPIBase = "api/workout/SearchWorkoutPlans";
    private getExercisesByIdBase = "api/workout/GetExerciseById";

    constructor(private httpServiceBase: HttpServiceBase,
        private guidedWorkoutService: GuidedWorkoutService) {
    }

    public searchWorkoutPlans(
        search?: string,
        filter?: string,
        count?: number,
        thumbnailHeight?: number,
        thumbnailWidth?: number) {

        var searchWorkoutPlansAPIUrl = HttpServiceBase.urlConstructor(
            this.searchWorkoutPlansAPIBase,
            { key: "search", value: search },
            { key: "filter", value: filter },
            { key: "count", value: count },
            { key: "thumbnailHeight", value: thumbnailHeight },
            { key: "thumbnailWidth", value: thumbnailWidth });

        return this.httpServiceBase.apiGet(searchWorkoutPlansAPIUrl,
            data => {
                this.guidedWorkoutService.setWorkoutPlans(data);
            },
            true
        );
    }

    public getExercisesById(Id: string) {
        var getExercisesByIdUrl = HttpServiceBase.urlConstructor(this.getExercisesByIdBase, { key: "id", value: Id });

        return this.httpServiceBase.apiGet(getExercisesByIdUrl,
            data => {
                this.guidedWorkoutService.setExercisesById(data);
            },
            true
        );
    }

    public getExercises(count?: number, pageNumber?: number, queryFilter?: string, queryValue?: string): Promise<Object> {
        var getExercisesAPIUrl = HttpServiceBase.urlConstructor(this.getExercisesAPIBase, { key: "token", value: false },
            { key: "count", value: count }, { key: "pageNumber", value: pageNumber }, { key: queryFilter, value: queryValue });

        return this.httpServiceBase.apiGet(getExercisesAPIUrl,
            data => {
                this.guidedWorkoutService.setExercises(data);
            },
            true
        );
    }

}