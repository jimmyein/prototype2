import { Injectable } from '@angular/core';
import { ExerciseSearchResultDTO} from '../model/ExerciseSearchResultDTO';
import { FitnessResultCluster } from '../model/FitnessResultCluster';

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class GuidedWorkoutService {
    constructor() {
    }

    private workouts: ExerciseSearchResultDTO[];
    private _exercises : ExerciseSearchResultDTO[];

    public get exercises() : ExerciseSearchResultDTO[] {
        return this._exercises;
    }
    public set exercises(v : ExerciseSearchResultDTO[]) {
        this._exercises = v;
    }
    
    private _workoutPlans : FitnessResultCluster;
    public get workoutPlans() : FitnessResultCluster {
        return this._workoutPlans;
    }
    public set workoutPlans(v : FitnessResultCluster) {
        this._workoutPlans = v;
    }

    public getWokroutPlans(): FitnessResultCluster {
        return this.workoutPlans;
    }

    public setWorkoutPlans(workoutPlans: FitnessResultCluster) {
        this.workoutPlans = workoutPlans;
    }

    public getExercises(): ExerciseSearchResultDTO[] {
        return this.exercises;
    }

    public setExercises(exercises: ExerciseSearchResultDTO[]) {
        this.exercises = exercises;
    }
}