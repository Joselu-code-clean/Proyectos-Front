import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  // Array que contendra toda las cartas del firebase
  public allCards = [];

  public textBuscar = '';

  constructor(
    private _serviceFirestore: FirestoreService,
    private _serviceData: DataService
     ) { }

  ngOnInit() {
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
  }, 1000);

  }

  public buscar( event ) {
    this.textBuscar = event.detail.value;
  }

}
