import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/_servicesMovie/movies.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie : any;
  id: number;
  mostrarCines = false;
  cinestexto : String = "";
  cines : string[] = [`Yelmo Cines, Algeciras\n`, `Odeon Multicines, Los Barrios\n`, `Cinesa La Cañada, Marbella\n`, `Cinesur, Málaga\n`, `Multicines Rosaleda, Málaga\n`, `Yelmo Cines, Jerez\n`, `Cinesur Nervión, Sevilla\n`, `Multicines Los Arcos, Sevilla\n`, `Multicines Guadalquivir, Córdoba\n`, `Cinesur El Tablero, Córdoba\n`];
  booleans: boolean[] = [false, false, false, false, false, false, false, false, false, false];

  
  constructor(private router: ActivatedRoute,
    private moviesService : MoviesService, private _location : Location, private router2: Router) {

    this.router.params.subscribe(params => {
      this.moviesService.getPelicula(params['id']).subscribe(data => {
          this.movie = data;
          this.id = data.id;         
        })
    });
    
  }

  ngOnInit() {
  }

  back() {
    this._location.back();
  }

  getCines() {
    console.log(this.id);
    this.mostrarCines = !this.mostrarCines;
  }

}
