import { LoginPage } from './pages/login/login.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { User } from './models/user.class';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // Usuario actual
  public currentUser: User = new User();

  // Array para visualizar las rutas del sidebar

  public appPages = [
    {
      title: 'Setting User',
      url: '/setting-user',
      icon: 'settings'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,
    private afAuth: AngularFireAuth,
    private authUser: AuthService
  ) {
    this.initializeApp();
    this.currentUser = authUser.getCurrentUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public onLogout() {
    this.menu.close();
    this.menu.enable(false);
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
