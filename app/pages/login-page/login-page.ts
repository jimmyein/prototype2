import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {OAuthService} from '../../service/oauthService';
import {GuidedWorkoutService} from '../../service/guidedWorkoutService';
import {TabsPage} from '../tabs/tabs';
import {InMemoryMockDataService} from '../../mockData/mockData';
import {Slide} from '../../model/models';

@Component({
    templateUrl: 'build/pages/login-page/login-page.html'
})
export class LoginPage {
    public slides : Slide[];


    constructor(
        private _navController: NavController,
        private oAuthService: OAuthService,
        private guidedWorkoutService: GuidedWorkoutService,
        private inMemoryMockDataService: InMemoryMockDataService) {
            this.slides = this.inMemoryMockDataService.slides;
    }

    public login() {
        this.guidedWorkoutService.signInDashboard();
    }

    public skip() {
        this._navController.setRoot(TabsPage);
        this._navController.popToRoot();
    }
}