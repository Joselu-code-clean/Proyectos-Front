import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // Crea un nueva carta
  public createCard(data: {img: string, titulo: string, clase: string}) {
    return this.firestore.collection('cards').add(data);
  }

  // Crea un nuevo heroe
  public createHero(data: {src: string, nombre: string, info: string}) {
    return this.firestore.collection('herous').add(data);
  }

  // Creamos un usario:
  public createUser(data: {src: string, email: string, info: string, nickName: string}) {
    return this.firestore.collection('users').add(data);
  }

  // Obtiene todas las cartas
  public getCards() {
    return this.firestore.collection('cards').snapshotChanges();
  }
  // Obtiene todos los heroes
  public getHerous() {
    return this.firestore.collection('herous').snapshotChanges();
  }
}