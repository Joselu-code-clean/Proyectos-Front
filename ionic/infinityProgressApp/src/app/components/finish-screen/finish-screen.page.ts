import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-screen',
  templateUrl: './finish-screen.page.html',
  styleUrls: ['./finish-screen.page.scss'],
})
export class FinishScreenPage implements OnInit {

  public isMenuFav: boolean;

  public totalTime: number;
  public totalExercises: number;

  public showLogo: boolean = true;
  public statistics: boolean;

  constructor(private data_service: DataService, private navController: NavController) { }

  ngOnInit() {
    this.totalTime = this.data_service.getTotalTime();
    this.totalExercises = this.data_service.getTotalExercise();
    this.isMenuFav = this.data_service.getIsMyRoutine();

    setTimeout(() => {
      this.showLogo = false
    }, 3450);
  }

  public goToChooseRutine(){
    this.cleanExercise();
    this.navController.navigateBack('/routine-list');
  }

  public goToRoutinesFav(){
    this.cleanExercise();
    this.navController.navigateBack('/my-routine');
  }

  private cleanExercise(){
    if(this.data_service.getIsMyRoutine()){
      this.data_service.setCurrentExerciseOfRutineFav(0);
    }else{
      this.data_service.setCurrentExerciseOfRutine(0);
    }
  }

}
