import { DataService } from './../../services/data/data.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relax-time',
  templateUrl: './relax-time.page.html',
  styleUrls: ['./relax-time.page.scss'],
})
export class RelaxTimePage implements OnInit {

  public timeRelax: number;
  private timer;
  private click: boolean;

  constructor(private data_Service: DataService, private navController: NavController) { }

  ngOnInit() {
    this.click = false;
    this.timeRelax = this.data_Service.getTimeRelax();
    setTimeout(() => {
      this.click = true;
      this.timer = setInterval(() => {
                  if(this.timeRelax == 0){
                    this.skipTime();
                  }
                  this.timeRelax -=1;
                }, 1000);
    }, 100);
  }

  public skipTime(){
    if (this.click) {
      clearInterval(this.timer);
      var numberCurrentExercise;
      // this.data_Service.setCurrentExercise(numberCurrentExercise);
      if(this.data_Service.getIsMyRoutine()){
        numberCurrentExercise = this.data_Service.getCurrentRutine().currentExerciseFav + 1;
        this.data_Service.setCurrentExerciseOfRutineFav(numberCurrentExercise);
      }else{
        numberCurrentExercise = this.data_Service.getCurrentRutine().currentExercise + 1;
        this.data_Service.setCurrentExerciseOfRutine(numberCurrentExercise);
      }
      this.navController.navigateForward('/training');
    }
  }

}
