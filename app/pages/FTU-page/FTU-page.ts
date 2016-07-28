import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {AuthenticationService} from '../../service/authenticationService';
import {TabsPage} from '../tabs/tabs';
import {InMemoryMockDataService} from '../../mockData/mockData';
import {Slide} from '../../model/Slide';

@Component({
    templateUrl: 'build/pages/FTU-page/FTU-page.html'
})
export class FTUPage {
    public slides: Slide[];


    constructor(
        private _navController: NavController,
        private authenticationService: AuthenticationService,
        private inMemoryMockDataService: InMemoryMockDataService) {
        this.slides = this.inMemoryMockDataService.slides;
    }

    public login() {
    }

    public skip() {
        window.localStorage.setItem("FTUset", "true");
        this._navController.setRoot(TabsPage);
        this._navController.popToRoot();
    }
}