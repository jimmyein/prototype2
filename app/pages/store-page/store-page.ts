import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {DetailPage} from '../detail-page/detail-page';
import {WorkoutServiceClient} from '../../service/workoutServiceClient';
import {WorkoutDto, QueryDto, OrderBy} from '../../model/Workouts';
import {WorkoutConstants} from '../../Constants/WorkoutConstants';
import {InMemoryMockDataService} from '../../mockData/mockData';


@Component({
  templateUrl: 'build/pages/store-page/store-page.html'
})
export class StorePage {
  public DifficultyLevels: string[] = WorkoutConstants.DifficultyLevels;
  public FocusOptions: string[] = WorkoutConstants.FocusOptions;
  public BodyPartsOptions: string[] = WorkoutConstants.BodyPartsOptions;
  public WorkoutTypeOptions: string[] = WorkoutConstants.WorkoutTypeOptions;
  public featuredWorkoutSlideOptions = {
    loop: true,
    autoplay: 5000,
    speed: 200
  };
  public filter: string;
  public featuredWorkouts;

  constructor(private navController: NavController,
    private workoutServiceClient: WorkoutServiceClient,
    private mockData: InMemoryMockDataService) {
      this.featuredWorkouts = mockData.featuredWorkouts;
      this.filter = "WorkoutTypeOptions";
  }

  goToDetailPage(filter: string, value: string) {
    this.navController.push(DetailPage, {
      filter: filter, value: value
    });
  }
}
