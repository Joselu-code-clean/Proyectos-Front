import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { UserLogin } from 'src/app/models/exercise/userLogin';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firestore_service: AngularFirestore, private auth: AuthService) {
  }


  //Añadir nueva rutina al usuario actual
  public  addNewRoutine(nameRoutine: string) {
    // En el "doc" pasaremos el usuario logueado actual -> aun no esta hecho
    // y despues el nameRoutine sera el nombre de la rutina cuando pulsemos en el boton fav de algun item
    this.firestore_service.collection('favRoutines').doc(this.auth.getCurrentUser().email).update({
      routines:  firestore.FieldValue.arrayUnion(nameRoutine)
    });
  }


  //Obtener objeto firestore del usuario actual
  public async getRoutinesOfUser() {
      return this.firestore_service.collection('favRoutines').doc(this.auth.getCurrentUser().email).snapshotChanges();
  }

  //Eliminar rutina seleccionada
  public  deleteRoutine(nameRoutineToDelete: string){
    this.firestore_service.collection('favRoutines').doc(this.auth.getCurrentUser().email).update({
      "routines": firestore.FieldValue.arrayRemove(nameRoutineToDelete)
    });
  }
}
