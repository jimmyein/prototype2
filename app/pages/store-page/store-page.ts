import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {DetailPage} from '../detail-page/detail-page';
import {GuidedWorkoutService} from '../../service/guidedWorkoutService';
import {WorkoutDto, QueryDto, OrderBy} from '../../model/guidedWorkouts';



@Component({
  templateUrl: 'build/pages/store-page/store-page.html'
})
export class StorePage {
  public menuCurrentSelect: string = "Genre";
  public DifficultyLevels: string[] = ["Beginner", "Intermediate", "Advanced"];

  constructor(private navController: NavController,
    private guidedWorkoutService: GuidedWorkoutService) {
    
    //this.guidedWorkoutService.queryGuidedWorkout(OrderBy.DIFFICULTY, true, 200, "", "").then(() => {

    //});
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
