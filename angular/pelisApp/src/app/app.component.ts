import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MoviesService } from './services/_servicesMovie/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pelisApp';
  items: Observable<any[]>;
  constructor(db: AngularFirestore, public _ms : MoviesService) {
    this.items = db.collection('items').valueChanges();
    this._ms.getDiscoverMovies().subscribe(data => console.log(data));
  }
}
