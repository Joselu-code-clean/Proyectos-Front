import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.page.html',
  styleUrls: ['./exercise-list.page.scss'],
})
export class ExerciseListPage implements OnInit {

  public listExercise:any [] = [];

  constructor(private data_service: DataService, private navController: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.listExercise = this.data_service.getListExerciseChoose();
  }

  async presentConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Hay Progreso Guardado',
      message: '¿Desea continuar?',
      buttons: [
        {
          text:'Si',
          handler:() => {   
            this.navController.navigateForward('/training');
          }
        },
        {
          text:'No',
          handler:() => {
            this.resetField();
            this.navController.navigateForward('/training');
          }
        }
      ]
    });
    await alert.present();
  }

  private resetField(){
    this.data_service.setCurrentExercise(0);
    if(this.data_service.getIsMyRoutine()){
      this.data_service.setCurrentRutineCurrentExerciseFav(0);
    }else{
      this.data_service.setCurrentRutineCurrentExercise(0);
    }

  }

  public startExercises(){
    if(this.data_service.getIsMyRoutine()){
      if(this.data_service.getCurrentRutine().currentExerciseFav > 0){
        this.presentConfirm();
      }else{
        this.navController.navigateForward('/training');
      }
    }else{
      if(this.data_service.getCurrentRutine().currentExercise > 0){
        this.presentConfirm();
      }else{
        this.navController.navigateForward('/training');
      }
    }

  }

}