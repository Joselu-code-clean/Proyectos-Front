import { AlertService } from './../../services/alert/alert.service';
import { NavController } from '@ionic/angular';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/exercise/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user: UserLogin = new UserLogin();

  constructor(
    private authService: AuthService,
    private navController: NavController,
    private alert_service: AlertService) {
  }

  ngOnInit() {
  }

  async onLogin() {
    const user = await this.authService.onLogin(this.user);
    if (user) {
      this.authService.setEmailCurrentUser(user.user.email);
      this.navController.navigateForward('/load-windows');
    } else {
      this.alert_service.presentAlert('ERROR','Error al iniciar sesion','Compruebe si su correo o contraseña es correcto');
    }
  }

}
