import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/detail-page/detail-page.html'
})
export class DetailPage {

  constructor(private _navController: NavController, platform: Platform) {
  
  }

goBack(){
    this._navController.pop();
  }
}