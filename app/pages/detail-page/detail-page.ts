import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {NavController, NavParams, Loading} from 'ionic-angular';
import {WorkoutDto, QueryDto, OrderBy, DifficultyLevels} from '../../model/Workouts';
import {GuidedWorkoutService} from '../../service/guidedWorkoutService';
import {WorkoutServiceClient} from '../../service/workoutServiceClient';
import {ExerciseSearchResultDTO} from '../../model/ExerciseSearchResultDTO';

@Component({
  templateUrl: 'build/pages/detail-page/detail-page.html'
})
export class DetailPage {

  private filter: string;
  private value: string;
  private loading: Loading;
  public workouts: ExerciseSearchResultDTO[];

  constructor(private navController: NavController,
    platform: Platform,
    navParams: NavParams,
    private guidedWorkoutService: GuidedWorkoutService,
    private workoutServiceClient: WorkoutServiceClient) {
    this.filter = navParams.get("filter");
    this.value = navParams.get("value");

    this.presentLoading();
    this.getWorkout().then((response) => {
      this.loading.dismiss()
    });
    
    this.workouts = this.guidedWorkoutService.getGuidedWorkouts();

    if (this.workouts == null || this.workouts == undefined) {
    }
  }

  presentLoading() {
    this.loading = Loading.create({
      content: "Loading...",
      duration: 20
    });

    this.navController.present(this.loading);
  }

  private getWorkout(): Promise<Object> {
    switch (this.filter) {
      case "DifficultyLevels":
        return this.workoutServiceClient.queryWorkout(0, 1, "level", this.value);

      case "FocusOptions":
        return this.workoutServiceClient.queryWorkout(0, 1, "focus", this.value);

      case "BodyPartsOptions":
        return this.workoutServiceClient.queryWorkout(0, 1, "level", this.value);

      case "WorkoutTypeOptions":
        return this.workoutServiceClient.queryWorkout(0, 1, "bodyParts", this.value);

      default:
        return this.workoutServiceClient.queryWorkout();
    }
  }

  goBack() {
    this.navController.pop();
  }
}