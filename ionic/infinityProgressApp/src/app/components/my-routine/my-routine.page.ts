import { NavController } from '@ionic/angular';
import { DataService } from './../../services/data/data.service';
import { UserData } from '../../models/exercise/userData';
import { FirebaseServiceService } from './../../services/firebase/firebase-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-routine',
  templateUrl: './my-routine.page.html',
  styleUrls: ['./my-routine.page.scss'],
})
export class MyRoutinePage implements OnInit {

  public routinesUser = new UserData();

  constructor(private data_service: DataService, private navController: NavController, private firestore_service: FirebaseServiceService) { }

  ngOnInit() {
    this.routinesUser = this.data_service.getDataUser();
  }

  public deleteRoutine(index: number){
    this.firestore_service.deleteRoutine(this.routinesUser.routines[index]);

    this.routinesUser = this.data_service.getDataUser();
  }

  public goToRutineChoose(name: string){
    // Hacer metodo para navegar al ejercicio indicado, para ello tiene que buscar el texto en todas las constantes de la bd.
    this.data_service.setIsFavoriteOrNormal("my");
    this.data_service.setNameRoutine(name);
    this.data_service.setIsMyRoutine(true);
    this.navController.navigateForward('/exercise-list');
  }


}
