import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {UserService} from '../../Service/UserService';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [UserService]
})
export class HomePage {
  public doughnutChartLabels: string[] = ['Sleep', 'Activity', 'Diet'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Hiking', 'Coding', 'Biking', 'Running'];
  public radarChartType: string = 'radar';
  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' }
  ];

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

  public events = null;
  public showDetail = false;

  public radarChartColours: Array<any> = [
    {
      backgroundColor: '#1c1c1f',
      borderColor: '#FF7235',
      pointBackgroundColor: '#6BA4FF',
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'white'
    }];


  constructor(private _navController: NavController,
    private UserService: UserService) {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public toggle(): void {
    this.showDetail = !this.showDetail;
  }

  public getEvents(): void {
    this.events = this.UserService.getEvent();
  }
}