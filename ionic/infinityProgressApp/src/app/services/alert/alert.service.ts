import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  public async presentAlert(head: string, subhead: string, text: string) {
      if(subhead == undefined){
        subhead = '';
      }
  
      const alert = await this.alertController.create({
        header: head,
        subHeader: subhead,
        message: text,
        buttons: [
          {
            text: 'CERRAR',
            cssClass: 'secondaryAlert',
          }
        ]
      });
  
      await alert.present();
      let result = await alert.onDidDismiss();
  }

}
