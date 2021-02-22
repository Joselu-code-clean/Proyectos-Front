import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/_servicesAuth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  ngDoCheck(): void {
    this.ngOnInit();
  }

  constructor(private _auth : AuthService, private router: Router) { }

  ngOnInit() {}

  public searchMovies(enteredText: string) {
    this.router.navigate(['/search', enteredText]);
  }

  public ocultar():boolean{
    return this._auth.comprobarLogin();
  }
  

  public logout() {
    this._auth.logOut();
    this.router.navigate(['/login']);
  }

  

}
