import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {DetailPage} from '../detail-page/detail-page';
import {WorkoutServiceClient} from '../../service/workoutServiceClient';
import {WorkoutDto, QueryDto, OrderBy} from '../../model/Workouts';
import {WorkoutConstants} from '../../Constants/WorkoutConstants';


@Component({
  templateUrl: 'build/pages/store-page/store-page.html'
})
export class StorePage {
  public menuCurrentSelect: string = "DifficultyLevels";
  public DifficultyLevels: string[] = WorkoutConstants.DifficultyLevels;
  public FocusOptions: string[] = WorkoutConstants.FocusOptions;
  public BodyPartsOptions: string[] = WorkoutConstants.BodyPartsOptions;
  public WorkoutTypeOptions: string[] = WorkoutConstants.WorkoutTypeOptions;
  public featuredWorkoutSlideOptions = {
    loop: true,
    autoplay: 5000,
    pager: true,
    speed: 200
  };
  public filter: string = "DifficultyLevels";;

  constructor(private navController: NavController,
    private workoutServiceClient: WorkoutServiceClient) {
  }

  goToDetailPage(filter: string, value: string) {
    this.navController.push(DetailPage, {
      filter: filter, value: value
    });
  }
}
