import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyBlgPwGjoaQUnQvAqOVNy5hpfw0sL1JFV0';
  private userToken: string = "n";

  constructor( private http: HttpClient, private afAuth: AngularFireAuth) { }
  //Metodos para el login normal de firebase
  guardarToken ( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken () {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    }
    else {
      this.userToken = '';
    }
  }

  nuevoUsuario( usuario: UsuarioModel ) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

    return this.http.post(
      `${ this.url }:signUp?key=${ this.apiKey }`,
      authData
    )
  }

  login ( usuario: UsuarioModel ) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(
      `${ this.url }:signInWithPassword?key=${ this.apiKey }`,
      authData
    ).pipe( map( resp => {
      this.guardarToken( resp['idToken']);
      return resp;
    }));
  }

  eliminar () {
    this.leerToken()
    const authData = {
        idToken: this.userToken
    }
    return this.http.post(
      `${ this.url }:delete?key=${ this.apiKey }`,
      authData
    );
  }

  logOut() {
    localStorage.removeItem('token');
    this.userToken = "n";
    this.comprobarLogin();
  }

  comprobarLogin(): boolean {
    return this.userToken.length > 2;
  }


  //Metodos de login para iniciar con Google/Facebook/etc.
  doFacebookLogin():boolean{
    let validate: boolean = false;
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider).then(function(){
      Swal.fire({
        icon: 'success',
        title: 'Login correctamente',
        text: '¡Has iniciado correctamente!'
      });
      setTimeout(()=>{this.router.navigate(['/home', "home"])}, 1000);//Esperamos un 1 sec
      validate = true;
    }).catch(function(){
      validate = false;
    })
    return validate;
  } 


    


  }
