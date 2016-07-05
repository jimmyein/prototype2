import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login-page/login-page';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {OAuthService} from './service/oauthService';
import {InMemoryMockDataService} from './mockData/mockData';
import {BackendServiceBase} from './service/backendServiceBase';
import {WorkoutServiceClient} from './service/workoutServiceClient';
import {GuidedWorkoutService} from './service/guidedWorkoutService';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform,
    private menu: MenuController,
    private oauthService: OAuthService,
    private workoutServiceClient: WorkoutServiceClient,
    private guidedWorkoutService: GuidedWorkoutService) {

    var storage = window.localStorage;
    menu.enable(true);
    // TODO: Verify the token
    // if token not exsist
    // TODO:if expired go refrsh token
    if (window.localStorage.getItem("FTUset") == "true") {

    } else {
      this.rootPage = LoginPage;
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  public login(): void {
    this.oauthService.login().then(() => {
      this.workoutServiceClient.getKatToken().then(() => {
        window.alert("login successful!");
      });
    });
  }

  public logout(): void {

  }


}



var providers = [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  OAuthService,
  GuidedWorkoutService,
  InMemoryMockDataService,
  BackendServiceBase,
  WorkoutServiceClient
];

ionicBootstrap(MyApp, providers)
