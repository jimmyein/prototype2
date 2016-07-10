import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { ExerciseSearchResultDTO} from '../model/guidedWorkouts';

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class GuidedWorkoutService {
    private workouts: ExerciseSearchResultDTO[];

    constructor(private http: Http) {

    }

    public getGuidedWorkouts() {
        return this.workouts;
    }

    public setGuidedWokrouts(workouts: ExerciseSearchResultDTO[]) {
        this.workouts = workouts;
    }
}