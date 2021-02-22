import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth/auth.service';
import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseServiceService } from 'src/app/services/firebase/firebase-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // Array con los niveles
  public levels = [];
  

  // Propiedades para las estadisticas
  public totalTime;
  public totalExercise;

  constructor(
    private afAuth: AngularFireAuth,private data_service: DataService, private navController: NavController
    ) { }

  ngOnInit() {
    this.levels = this.data_service.getLevels();
    this.totalExercise = this.data_service.getTotalExercise();
    this.totalTime = this.data_service.getTotalTime();
  }



  ionViewWillEnter(){
    this.data_service.createNewUserToDB();
    this.totalExercise = this.data_service.getTotalExercise();
    this.totalTime = this.data_service.getTotalTime();
  }

  /*Funcion de navegacion:*/
  public goToNivel(index){
    /*Guardamos el index en el servicio*/
    /*Lo utilizaremos en la pantalla de la carga de la lista de rutinas*/
    this.data_service.setNavigateIndexDashboard(index);
    /*Navegamos a las categorias*/
    this.navController.navigateForward('/category');
  }

  public goToMyRoutine(){
    this.navController.navigateForward('/my-routine');
  }

  onLogout() {
    this.afAuth.signOut();
    this.navController.navigateForward('/login');
    }

}
