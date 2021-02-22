import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { User } from './../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private currentUser: User = new User();

  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe( user => (this.isLogged = user) );
  }

  // Método para login
  async onLogin(user: User) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error en el login', error);
    }
  }

  // Método para registro
  async onRegister(user: User) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error en el registro', error);
    }
  }

  async onLogOut() {
      await this.afAuth.auth.signOut();
  }

  /*GETTER AND SETTER DEL USUSARIO*/
  public getCurrentUser() {
    return this.currentUser;
  }

  public setEmailCurrentUser(email: any) {
    this.currentUser.email = email;
  }

}
