import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/_servicesMovie/movies.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {

  peliculas: any[] = [];
  wordSearched: string;

  constructor(private _activatedRoute: ActivatedRoute, private moviedb: MoviesService) {

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => this.wordSearched = params['text']);
    this.buscar(this.wordSearched);
  }

  buscar(termino: string) {
    this.moviedb.getBusquedaPeliculas(termino).subscribe((data: any) => {
      this.peliculas = data;
    });
  }

  
}
