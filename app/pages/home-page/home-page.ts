import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {UserService} from '../../Service/UserService';
import {InMemoryMockDataService} from '../../mockData/mockData';
import {StatusBar} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [UserService]
})
export class HomePage {

  public activity;
  public sleep;
  public socialMetrics;

  public doughnutChartLabels: string[] = ['Sleep', 'Activity', 'Diet'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

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

  constructor(private navController: NavController,
    private userService: UserService,
    private mockData: InMemoryMockDataService) {
      StatuBar.overlaysWebView(true);
      StatusBar.backgroundColorByHexString('#ffffff');

      this.activity = mockData.activity;
      this.sleep = mockData.sleep;
      this.socialMetrics = mockData.socialMetrics;
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
    this.userService.getEvent().then(data => {
      this.events = data;
    });
  }
}