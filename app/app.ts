import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {FTUPage} from './pages/FTU-page/FTU-page';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {AuthenticationService} from './service/authenticationService';
import {InMemoryMockDataService} from './mockData/mockData';
import {HttpServiceBase} from './service/HttpServiceBase';
import {WorkoutServiceClient} from './service/workoutServiceClient';
import {GuidedWorkoutService} from './service/guidedWorkoutService';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform,
    private menu: MenuController,
    private authenticationService: AuthenticationService,
    private workoutServiceClient: WorkoutServiceClient,
    private guidedWorkoutService: GuidedWorkoutService) {

    var storage = window.localStorage;
    menu.enable(true);
    // TODO: Verify the token
    // if token not exsist
    // TODO:if expired go refrsh token
    if (window.localStorage.getItem("FTUset") == "true") {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = FTUPage;
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  public login(): void {
    this.authenticationService.login().then(() => {
      this.authenticationService.login2().then(() => {
        this.authenticationService.getKatToken().then(() => {
          window.alert(window.localStorage.getItem("MSATokenServices"));
          window.alert("login successful!");
        });
      });
    });
  }

  public logout(): void {

  }
}

var providers = [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  AuthenticationService,
  GuidedWorkoutService,
  InMemoryMockDataService,
  HttpServiceBase,
  WorkoutServiceClient
];

ionicBootstrap(MyApp, providers)
