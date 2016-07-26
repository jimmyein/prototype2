import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {UserService} from '../../Service/UserService';
import {InMemoryMockDataService} from '../../mockData/mockData';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [UserService]
})
export class HomePage {

  public activity;
  public sleep;
  public socialMetrics;
  public events = null;
  public showDetail = false;

  constructor(private navController: NavController,
    private userService: UserService,
    private mockData: InMemoryMockDataService) {
      this.activity = mockData.activity;
      this.sleep = mockData.sleep;
      this.socialMetrics = mockData.socialMetrics;
  }

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