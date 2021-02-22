import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SettingService } from 'src/app/services/setting/setting.service';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.page.html',
  styleUrls: ['./introduccion.page.scss'],
})
export class IntroduccionPage implements OnInit {

  // Cargamos todas las imagenes menos la ultima, que lo estableceremos en el html.
  public slides:any[] = [
        {
          image: "assets/imgSliders/1Pantalla.png"
        }
        ,
        {
          image: "assets/imgSliders/2Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/3Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/4Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/5Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/6Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/7Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/8Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/9Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/10Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/11Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/12Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/13Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/14Pantalla.png",
        }
        ,
        {
          image: "assets/imgSliders/15Pantalla.png",
        }
      ];

  constructor(private navCtrl: NavController, private setting_services: SettingService) { }

  ngOnInit() {
  }
  
  public saltarTutorial(){
    // Cambiamos el valor de setting para no mostrar mas los sliders
    this.setting_services.setting.mostrarTutorial = false;

    // Y guardamos en el storage la nueva configuracion
    this.setting_services.guardarStorage();

    this.navCtrl.navigateRoot( '/login' );
  }

}
