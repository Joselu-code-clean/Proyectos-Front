import { FirestoreService } from './../../services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.page.html',
  styleUrls: ['./unit-card.page.scss'],
})
export class UnitCardPage implements OnInit, OnDestroy {

  // En esta variable guardaremos el heroe que coincida con el nombre del argumento
  public currentHeroe: any;

  // Guardamos el nombre para mostrarlo.
  private nameCurrentHero;

  // Guardaremos las cartas del heroe indicado
  public allCards = [];
  public cardsOfHero = [];

  constructor(
    private _serviceFirestore: FirestoreService,
    private _serviceData: DataService,
    private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
    // Obtenemos el nombre traido del servicio
    this.nameCurrentHero = this._serviceData.SwitchNameHeroToClass(this._serviceData.getNameHome());
    // Primero obtenemos las cartas para luego filtrar.
    setTimeout(() => {
      this._serviceFirestore.getCards().subscribe((data: any) => {
        this.allCards = [];
        data.forEach((element: any) => {
            this.allCards.push({
              id: element.payload.doc.id,
              data: element.payload.doc.data()
            });
        });
      });
    // Buscamos el heroe con el nombre obtenido del home
      this._serviceData.getHeroes().forEach(element => {
        if ( element.data.nombre == this._serviceData.getNameHome()) {
          console.log(element.data.nombre);
          // Obtenemos los datos de dicho heroe y lo construimos
          this.currentHeroe = [
            {
            id: element.id,
            data: element.data
            }
        ];
      }
      });
    }, 1000);
    setTimeout(() => {
      // Filtramos las cartas de dicho heroe:
      this.allCards.forEach(element => {
        if (element.data.clase == this.nameCurrentHero){
          this.cardsOfHero.push({
            id: element.data.id,
            data: element.data
          });
        }
      });
    }, 2000);

  }

  ngOnDestroy() {
    this.menu.enable(true);
  }

}
