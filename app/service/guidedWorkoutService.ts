
import { Injectable } from '@angular/core';
import { ExerciseSearchResultDTO} from '../model/ExerciseSearchResultDTO';

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class GuidedWorkoutService {
    private workouts: ExerciseSearchResultDTO[];

    constructor() {
    }

    public getGuidedWorkouts() {
        return this.workouts;
    }

    public setGuidedWokrouts(workouts: ExerciseSearchResultDTO[]) {
        this.workouts = workouts;
    }
}