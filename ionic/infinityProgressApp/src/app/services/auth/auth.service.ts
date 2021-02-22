import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { UserLogin } from '../../models/exercise/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: UserLogin = new UserLogin();

  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe( user => (this.isLogged = user) );
  }

  // Método para login
  async onLogin(user: UserLogin) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error en el login', error);
    }
  }

  // Método para registro
  async onRegister(user: UserLogin) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error en el registro', error);
    }
  }

  async onLogOut() {
      await this.afAuth.signOut();
  }

    /*GETTER AND SETTER DEL USUSARIO*/
    public getCurrentUser() {
      return this.currentUser;
    }
  
    public setEmailCurrentUser(email: any) {
      this.currentUser.email = email;
    }

}
