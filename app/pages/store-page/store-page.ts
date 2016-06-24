import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {DetailPage} from '../detail-page/detail-page';
import {GuidedWorkoutService} from '../../service/guidedWorkoutService'

@Component({
  templateUrl: 'build/pages/store-page/store-page.html'
})
export class StorePage {

  constructor(private navController: NavController,
    private guidedWorkoutService: GuidedWorkoutService) {
      this.guidedWorkoutService.queryGuidedWorkout();
  }

  goToDetailPage() {
    this.navController.push(DetailPage);
  }

  showToastWithCloseButton() {
    const toast = Toast.create({
      message: 'Demo...',
      showCloseButton: true,
      closeButtonText: 'Ok',
    });

    this.navController.present(toast);
  }
}
