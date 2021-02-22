import { NavController, MenuController, AlertController } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {


  user: User = new User();

  constructor(
    private authService: AuthService,
    private navController: NavController,
    private menu: MenuController,
    private alertController: AlertController) {
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  ngOnDestroy() {
    this.menu.enable(true);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ERROR',
      subHeader: 'Error al iniciar sesion',
      message: 'Compruebe si su correo o contraseña es correcto , pulse OK',
      buttons: [
        {
          text: 'CERRAR',
          cssClass: 'secondaryAlert',
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async onLogin() {
    const user = await this.authService.onLogin(this.user);
    if (user) {
      this.authService.setEmailCurrentUser(user.user.email);
      console.log(this.authService.getCurrentUser().email);
      this.menu.enable(true);
      this.navController.navigateForward('/tabs');
    } else {
      this.presentAlert();
    }
  }

}
