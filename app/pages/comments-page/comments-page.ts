import {Component} from '@angular/core';
import {Loading, NavController} from 'ionic-angular';
import {Comment} from '../../model/models';
import {InMemoryMockDataService} from '../../mockData/mockData';

@Component({
  templateUrl: 'build/pages/comments-page/comments-page.html'
})
export class CommentsPage {

  public comments: Comment[];


  constructor(private _navController: NavController,
    private mockData: InMemoryMockDataService) {

    this.comments = this.mockData.comments;
    this.presentLoading();
  }

  presentLoading() {
    let loading = Loading.create({
      content: "Loading...",
      duration: 100
    });

    this._navController.present(loading);
  }
}
