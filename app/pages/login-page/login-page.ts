import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {OAuthService} from '../../service/oauthService';
import {GuidedWorkoutService} from '../../service/guidedWorkoutService';
import {TabsPage} from '../tabs/tabs';

@Component({
    templateUrl: 'build/pages/login-page/login-page.html'
})
export class LoginPage {
    public slides = [
        {
            title: "Compete against the global elites",
            description: "Get <b>inspired</b> to increase your daily steps or cardio score with new, personalized competitive leaderboard profiles who share your age, gender and BMI. One matches your activity level, and one is within the top 25% of people like you",
            image: "img/global.png",
        },
        {
            title: "Get out and explorer with Microsoft Band 2 and the Explore tile",
            description: "GPS and altimeter/barometer tracks your path, elevation change, and more. Smart alerts remind you to stay hydrated and refuel. Drop points of interest as you go to remember exploration highlights.",
            image: "http://ionicframework.com/dist/preview-app/www/img/ica-slidebox-img-2.png",
        }
    ];


    constructor(
        private _navController: NavController,
        private oAuthService: OAuthService,
        private guidedWorkoutService: GuidedWorkoutService) {
    }

    public login() {
        this.guidedWorkoutService.signInDashboard();
    }

    public skip() {
        this._navController.setRoot(TabsPage);
        this._navController.popToRoot();
    }
}