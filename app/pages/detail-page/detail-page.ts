import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';
import {WorkoutDto, QueryDto, OrderBy, DifficultyLevels} from '../../model/guidedWorkouts';
import {GuidedWorkoutService} from '../../service/guidedWorkoutService'

@Component({
  templateUrl: 'build/pages/detail-page/detail-page.html'
})
export class DetailPage {

  private filter: string;
  private value: string;
  public workouts: WorkoutDto[];

  constructor(private navController: NavController, platform: Platform, navParams: NavParams, private guidedWorkoutService: GuidedWorkoutService) {
    this.filter = navParams.get("filter") != undefined || null ? navParams.get("filter") : OrderBy[OrderBy.DIFFICULTY];
    this.value = navParams.get("value") != undefined || null ? navParams.get("value") : DifficultyLevels[DifficultyLevels.Beginner];
    this.workouts = this.filterWorkout();
    //this.workouts = this.guidedWorkoutService.getGuidedWorkouts();

    if (this.workouts == null || this.workouts == undefined) {
      // TODO: ERROR HANDLE
    }

  }

  goBack() {
    this.navController.pop();
  }

  private filterWorkout(): WorkoutDto[] {
    switch (this.filter) {
      case OrderBy[OrderBy.DIFFICULTY]:
        let result: WorkoutDto[] = [];
        this.guidedWorkoutService.getGuidedWorkouts().forEach((workout) => {
        });

        return result;

      default:
        return [];
    }
  }
}