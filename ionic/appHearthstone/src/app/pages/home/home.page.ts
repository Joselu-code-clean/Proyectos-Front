import { NavController } from '@ionic/angular';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public heroes = [];

  constructor(
    private _serviceData: DataService,
    private _serviceFirestore: FirestoreService,
    private navController: NavController
    )
  {}

  ngOnInit(): void {
    setTimeout(() => {
      this._serviceFirestore.getHerous().subscribe((data: any) => {
        data.forEach((element: any) => {
          this.heroes.push({
            id: element.payload.doc.id,
            data: element.payload.doc.data()
          });
        });
      });
  }, 1000);
    this._serviceData.setHeroes(this.heroes);
  }

  public enviarHeroe(heroSelected) {
    for (let index = 0; index < this.heroes.length; index++) {
      if (heroSelected == index) {
        this._serviceData.setNameHome(this.heroes[index].data.nombre);
        this.navController.navigateForward('/unit-card');
      }
    }
  }

}
