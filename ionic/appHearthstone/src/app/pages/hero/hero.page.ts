import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage implements OnInit {

  public heroes = [];

  constructor(private _serviceFirestore: FirestoreService) { }

  ngOnInit() {
    this._serviceFirestore.getHerous().subscribe((data: any) => {
      this.heroes = [];
      setTimeout(() => {
        data.forEach((element: any) => {
          this.heroes.push({
            id: element.payload.doc.id,
            data: element.payload.doc.data()
          });
        });
    }, 1000);

    });
  }

}
