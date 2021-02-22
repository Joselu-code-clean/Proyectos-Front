import { AlertService } from './../../services/alert/alert.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/exercise/userLogin';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: UserLogin = new UserLogin();
  public errorEmail: boolean = false;
  public errorPass: boolean = false;

  constructor(private authService: AuthService, private router: Router, private alert_service: AlertService) {
  }

  ngOnInit() {
  }

  async onRegister() {
      const user = await this.authService.onRegister(this.user);
      if (user) {
        this.errorEmail = false;
        this.errorPass = false;
          this.router.navigateByUrl('/login');
      }else{
        this.errorEmail = true;
        this.errorPass = true;
        this.alert_service.presentAlert('ERROR','Error al crear cuenta','Compruebe si su correo y contraseña tienen el formato correcto');
      }
  }

}
