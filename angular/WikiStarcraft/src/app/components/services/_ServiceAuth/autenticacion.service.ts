import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModelModule } from 'src/app/models/usuario-model/usuario-model.module';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyCNFcHqY3SvDJBYRTeICK-5GzAOpvfou9M';
  private userToken: string = "n";

  constructor( private http: HttpClient ) { }

  salir(){}

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

  nuevoUsuario( usuario: UsuarioModelModule ) {
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

  login ( usuario: UsuarioModelModule ) {
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
}