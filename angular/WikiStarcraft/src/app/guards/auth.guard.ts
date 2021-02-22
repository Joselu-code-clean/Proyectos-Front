import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from "rxjs";
import { AutenticacionService } from '../components/services/_ServiceAuth/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AutenticacionService,
    private router: Router) {}

  canActivate(): boolean {
    if (this.auth.comprobarLogin()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
