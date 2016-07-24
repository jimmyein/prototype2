import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {DetailPage} from '../detail-page/detail-page';
import {WorkoutServiceClient} from '../../service/workoutServiceClient';
import {WorkoutDto, QueryDto, OrderBy} from '../../model/Workouts';
import {WorkoutConstants} from '../../Constants/WorkoutConstants';


@Component({
  templateUrl: 'build/pages/store-page/store-page.html'
})
export class StorePage {
  public menuCurrentSelect: string = "DifficultyLevels";
  public DifficultyLevels: string[] = WorkoutConstants.DifficultyLevels;
  public FocusOptions: string[] = WorkoutConstants.FocusOptions;
  public BodyPartsOptions: string[] = WorkoutConstants.BodyPartsOptions;
  public WorkoutTypeOptions: string[] = WorkoutConstants.WorkoutTypeOptions;
  private slideIndex: number = 1;

  constructor(private navController: NavController,
    private workoutServiceClient: WorkoutServiceClient) {
      this.showSlides(slideIndex);
  }

  goToDetailPage(filter: string, value: string) {
    this.navController.push(DetailPage, {
      filter: filter, value: value
    });
  }

  public toogleMenu(select: string) {
    this.menuCurrentSelect = select;
  }

  public plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  public currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  public showSlides(n: number) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1;
    } 
    
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex-1].style.display = "block"; 
    dots[this.slideIndex-1].className += " active";
  }


}
