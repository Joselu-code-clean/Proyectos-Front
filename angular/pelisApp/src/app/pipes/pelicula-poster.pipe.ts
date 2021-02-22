import { Pipe, PipeTransform } from '@angular/core';


// Pipe encargado de pasar las imagenes de las Peliculas
@Pipe({
  name: 'peliculaPoster'
})
export class PeliculaPoster implements PipeTransform {

  transform(pelicula: any): any {

    // path url generica para obtener imagenes
    let url = "http://image.tmdb.org/t/p/w400";

    if (pelicula.poster_path) {
      return url + pelicula.poster_path;
    } else {
      return "assets/img/noimage.png";      
    }
  }
}
