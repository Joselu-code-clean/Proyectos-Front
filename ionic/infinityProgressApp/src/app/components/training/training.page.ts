import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { Exercise } from './../../models/exercise/exercise';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  public isTime: boolean;
  public isAttemps: boolean;
  public ready: boolean; // Identifica si estamos en la pantalla de preparacion o realizando el ejercicio
  public finishExercise: boolean;
  public exercise: Exercise;
  public currentExercise: number = 0;
  public totalExercise: number;
  public time: number;
  public attemps: number;

  constructor(private data_service: DataService, private navController: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.initialTrainer();
  }
  
  ionViewWillEnter(){
    this.initialTrainer();
  }

  private isRoutineSave(){
        // Comprobamos si estamos en las rutinas favoritas
        if(this.data_service.getIsMyRoutine()){
          if(this.data_service.getCurrentRutine().currentExerciseFav > 0){
            this.currentExercise = this.data_service.getCurrentRutine().currentExerciseFav;
            this.exercise = this.data_service.getListExerciseChoose()[this.data_service.getCurrentRutine().currentExerciseFav];
          }else{
            this.exercise = this.data_service.getListExerciseChoose()[0];
          }
        }else{
          // Si tenemos la rutina guardada, cargamos dicho ejercicio
          if(this.data_service.getCurrentRutine().currentExercise > 0){
            this.currentExercise = this.data_service.getCurrentRutine().currentExercise;
            this.exercise = this.data_service.getListExerciseChoose()[this.data_service.getCurrentRutine().currentExercise];
          }else{
            this.exercise = this.data_service.getListExerciseChoose()[0];
          }
        }
  }

  private initialTrainer(){
    // Volvemos a inicializar las propiedades.
    this.totalExercise = this.data_service.getListExerciseChoose().length;
    this.isTime = false;
    this.isAttemps = false;
    this.ready = false;
    this.finishExercise = false;
    
    this.isRoutineSave();
    this.checkModeExercise();
  }

  private checkModeExercise(){
        // Comprobamos si el ejercicio se realiza con tiempo o intentos
        if(this.exercise.time > 0){
          this.time = this.exercise.time;
          this.isTime = true;
          return "time";
        } else{
          this.isAttemps = true;
          this.attemps = this.exercise.attemps;
          return "attemps";
        }
  }

  // FUNCIONES PUBLICAS:

  public startExercise(){
    // Cambiar boton de comenzar por finalizar
    this.ready = true;
    if(this.checkModeExercise() == "time"){
      var timer = setInterval(() => {
        // Sumamos el total de tiempo que llevamos realizando el ejercicio.
        this.data_service.plusTotalTime(timer);
        // Comprobamos si el ejercicio ha acabado
        if (this.time == 0) {
          this.finishExercise = true;
          this.data_service.plusTotalExercise();
          clearInterval(timer);
        } else{
          //Reducir contador
          this.time -= 1;
        }
      }, 1000);
      
    } else{
      var timer = setInterval(() => {
        this.data_service.plusTotalTime(timer);
        if (this.attemps == 0) {
          this.finishExercise = true;
          this.data_service.plusTotalExercise();
          clearInterval(timer);
        }else{
          this.attemps -= 1;
        }
      }, 1000);
    }
  }

  public goToTimeRelax(){
    // Comprobar si estamos en el ultimo ejercicio para irnos al componente de finalizar
    if(this.totalExercise == this.currentExercise + 1){
      this.navController.navigateForward('/finish-screen');
    } else{
      // Si no, navegamos a la pantalla de descanso.
      this.navController.navigateForward('/relax-time');
    }
    
  }


  // ALERTAS:

  // PopUp para guardar el progreso de la rutina.
  async presentConfirm() {
    if(this.currentExercise <= 0){
      this.navController.navigateBack('/exercise-list');
    }else{
      const alert = await this.alertCtrl.create({
        header: 'Guardar Progreso',
        message: '¿Quieres guardar el progreso de la rutina?',
        buttons: [
          {
            text:'Si',
            handler:() => {   
              // Guardamos en la rutina que estamos el currentExercise de data_service
              if(this.data_service.getIsMyRoutine()){
                this.data_service.setCurrentRutineCurrentExerciseFav(this.currentExercise);
              }else{
                this.data_service.setCurrentRutineCurrentExercise(this.currentExercise);
              }
              // Viajamos a exercise-list
              this.navController.navigateBack('/exercise-list');
            }
          },
          {
            text:'No',
            handler:() => {
              this.data_service.setCurrentExercise(0);
              if(this.data_service.getIsMyRoutine()){
                this.data_service.setCurrentRutineCurrentExerciseFav(0);
              }else{
                this.data_service.setCurrentRutineCurrentExercise(0);
              }
              this.navController.navigateBack('/exercise-list');
            }
          }
        ]
      });
      await alert.present();
    }
  }

}
