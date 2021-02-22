import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/_servicesMovie/movies.service';

@Component({
  selector: 'app-galerias',
  templateUrl: './galerias.component.html',
  styleUrls: ['./galerias.component.css']
})
export class GaleriasComponent implements OnInit {

  public lists: any[] = [];
  public titulos: String[] = [];

  constructor(private moviesService : MoviesService) {
  //Obtenemos las listas de las peliculas de cada categoria que existe.
    this.moviesService.getDiscoverMovies().subscribe((data:any) => this.lists[0] = data);
    this.moviesService.getNewestMovies().subscribe((data:any) => this.lists[1] = data);
    moviesService.getAnimationMovies().subscribe((data:any) => this.lists[2] = data);

    this.titulos[0] = "Películas en cartelera";
    this.titulos[1] = "Novedades";
    this.titulos[2] = "Populares entre los más pequeños";
  
  }

  ngOnInit() {
  }

}
