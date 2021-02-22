import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.class';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  // Con async hacemos que se ejecute asincronamente la peticion.
  async onRegister() {
      const user = await this.authService.onRegister(this.user);
      if (user) {
          this.router.navigateByUrl('/');
      }
  }

}
