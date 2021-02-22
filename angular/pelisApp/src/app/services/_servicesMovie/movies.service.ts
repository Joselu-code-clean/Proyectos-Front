import { Injectable } from "@angular/core";
//Para hacer peticiones mediante HTTP
import { HttpClient } from "@angular/common/http";
// Para map y pipe
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //URL donde están los datos
  private apiUrl: string = "https://api.themoviedb.org/3";
  //Clave de acceso a la API que obtenemos al registrarnos
  private apiKey: string = "9d840dc22ceda76619a920e220d1929c";
  router: any;

  constructor(private http: HttpClient) { }

  //Método para obtener un JSON con varias películas a partir de los datos proporcionados por la URL.
  getQuery(query: string) {
    const url = `${this.apiUrl}${query}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    //http.get da error, así que utilizamos http.jsonp
    return this.http.jsonp(url, "");
  }

  //Método para obtener un JSON con una película a partir de la URL.
  getQueryforPelicula(query: string) {
    const url = `${this.apiUrl}${query}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }

  //Método para obtener las películas en cartelera.
  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results)
    );
  }

  //Método para obtener.
  getNewestMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc&primary_release_year=2020").pipe(
      map((data: any) => data.results)
    );
  }

  //Método para obtener.
  getAnimationMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc&with_genres=16").pipe(
      map((data: any) => data.results)
    );
  }  

  getBusquedaPeliculas(termino: string) {
    return this.getQuery(
      `/search/movie?query=${termino}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }

  getPelicula(id: string) {
    return this.getQueryforPelicula(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

}
