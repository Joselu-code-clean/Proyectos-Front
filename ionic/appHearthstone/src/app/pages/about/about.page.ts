import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, OnDestroy {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    //Desactivamos el sideMenu para que no nos aparezca en dicha pagina
    this.menu.enable(false);
  }

  ngOnDestroy(){
    //Tenemos que activarlo para que podamos usarlo de nuevo
    this.menu.enable(true);
  }

}
