import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../services/_ServiceAuth/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _auth: AutenticacionService, private router: Router) { }

  ngOnInit() {
  }

  ocultar():boolean{
    return this._auth.comprobarLogin();
  }

  desloguear(){
    this._auth.logOut();
    this.router.navigateByUrl("['/home']");
  }

}
