import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {NavController, NavParams, Loading} from 'ionic-angular';
import {FitnessSearchResultSchema} from '../../model/FitnessSearchResultSchema';

@Component({
  templateUrl: 'build/pages/workoutDetail-page/workoutDetail-page.html'
})
export class workoutDetailPage {
  public workoutPlan: FitnessSearchResultSchema;
  // public exercises;

  constructor(navParams: NavParams) {
    this.workoutPlan = navParams.get("workoutPlan");
    // this.exercises = navParams.get("exerciseDetail");
  }
}