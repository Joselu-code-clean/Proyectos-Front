import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/_servicesAuth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router: Router, private _auth: AuthService) {}

  canActivate(): boolean {
    if (this._auth.comprobarLogin()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
