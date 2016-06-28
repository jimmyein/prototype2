import {Component} from '@angular/core'
import {HomePage} from '../home-page/home-page';
import {MyWorkoutPage} from '../myworkout-page/myworkout-page';
import {StorePage} from '../store-page/store-page';
import {ContactPage} from '../contact-page/contact-page';
import {CommentsPage} from '../comments-page/comments-page';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = MyWorkoutPage;
    this.tab2Root = HomePage;
    this.tab3Root = StorePage;
    this.tab4Root = CommentsPage;
  }
}
