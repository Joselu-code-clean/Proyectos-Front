import { FirebaseServiceService } from './../../services/firebase/firebase-service.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-routine-list',
  templateUrl: './routine-list.page.html',
  styleUrls: ['./routine-list.page.scss'],
})
export class RoutineListPage implements OnInit {

  // Lista de Rutinas:
  public routines = [];

  constructor(private firestore_service: FirebaseServiceService, private data_service: DataService, private navController: NavController) { }

  ngOnInit() {
    this.routines = this.data_service.getListRoutines();
    // Establecemos los fav que esten guardados.
    this.routines = this.data_service.loadFavs(this.routines);
  }


  public goToRutineChoose(index:number){
    this.data_service.setIsFavoriteOrNormal("normal");
    this.data_service.setNameRoutine(this.routines[index].nameRoutine);
    this.data_service.setNavigateIndexRoutineChoose(this.routines[index].nameRoutine);
    this.data_service.setIsMyRoutine(false);
    this.navController.navigateForward('/exercise-list');
  }

  public favRutineEmply(index: number){
    this.firestore_service.addNewRoutine(this.routines[index].nameRoutine);
    this.putFavs(index);
    
  }
  public favRutineFill(index: number){
    this.firestore_service.deleteRoutine(this.routines[index].nameRoutine);
    this.removeFavs(index);
  }

  private putFavs(index){
    setTimeout(() => {
      this.routines[index].fav = this.data_service.isFavFavicon(this.routines[index].nameRoutine);
    }, 500);
  }

  private removeFavs(index){
    setTimeout(() => {
      this.routines[index].fav = this.data_service.isNotFavFavicon(this.routines[index].nameRoutine);
    }, 500);
  }

}
