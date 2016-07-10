import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {DetailPage} from '../detail-page/detail-page';
import {WorkoutServiceClient} from '../../service/workoutServiceClient';
import {WorkoutDto, QueryDto, OrderBy} from '../../model/Workouts';
import {GuidedWorkoutService} from '../../service/guidedWorkoutService';


@Component({
  templateUrl: 'build/pages/store-page/store-page.html'
})
export class StorePage {
  public menuCurrentSelect: string = "Genre";
  public DifficultyLevels: string[] = ["Beginner", "Intermediate", "Advanced"];

  constructor(private navController: NavController,
    private workoutServiceClient: WorkoutServiceClient,
    private guidedWorkoutService: GuidedWorkoutService) {
    this.workoutServiceClient.queryWorkout();
  }

  goToDetailPage(filter: string, value: string) {
    this.navController.push(DetailPage, {
      filter: filter, value: value
    });
  }

  public toogleMenu(select: string) {
    this.menuCurrentSelect = select;
  }
}
