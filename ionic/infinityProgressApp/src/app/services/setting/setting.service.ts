import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public setting = {
    mostrarTutorial: true
  }

  constructor(private storage: Storage, private platform: Platform) { 
  }

  // Metodos de la configuracion

  public cargarStorage(){
    let promise = new Promise((resolve, reject) => {
      if( this.platform.is("cordova") ){
        if (localStorage.getItem("ajustes")) {
          this.setting = JSON.parse(localStorage.getItem("ajustes"));
        }
      }else{
          if (localStorage.getItem("ajustes")) {
            // Cargamos en nuestras setting la configuracion guardada del storage.
            this.setting = JSON.parse(localStorage.getItem("ajustes"));
          }
      }

      resolve(); // Para terminar la promesa.
    });

    return promise;

  }

  public guardarStorage(){
    if( this.platform.is("cordova") ){
      localStorage.setItem("ajustes", JSON.stringify(this.setting));
    }else{
      // Guardamos en el localStorage del dispositivo la cadena ajustes.
        localStorage.setItem("ajustes", JSON.stringify(this.setting));
    }
  }

}
