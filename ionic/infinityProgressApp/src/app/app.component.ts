import { IntroduccionPage } from './components/introduccion/introduccion.page';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingService } from './services/setting/setting.service';
import { DashboardPage } from './components/dashboard/dashboard.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private setting_services: SettingService,
    private navController: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Configuracion de los sliders
      this.setting_services.cargarStorage();

      if (this.setting_services.setting.mostrarTutorial ) {
        // Si no han visto el slider, lo mostramos
        this.navController.navigateRoot('/introduccion');
      }else{
        // Si ya lo han visto, cargamos la dashboard
        this.navController.navigateRoot('/dashboard');
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }
}
