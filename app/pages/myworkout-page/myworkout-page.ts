import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  templateUrl: 'build/pages/myworkout-page/myworkout-page.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class MyWorkoutPage {
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: string = 'line';
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };

  public showDetail = false;

  constructor(private _navController: NavController) {
  }

  public toggle(): void {
    this.showDetail = !this.showDetail;
  }
}