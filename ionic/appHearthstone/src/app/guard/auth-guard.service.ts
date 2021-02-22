import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { AuthService } from './../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private afAuth: AuthService, private router: Router) {}

  public canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.afAuth.isLogged) {
          return true;
      } else {
          console.log('Acceso denegado');
          this.router.navigateByUrl('/login');
          return false;
      }
  }
}
