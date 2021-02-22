import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaBackdrop'
})
export class PeliculaBackdropPipe implements PipeTransform {

  transform(pelicula: any): any {

    // path url generica para obtener imagenes
    let url = "http://image.tmdb.org/t/p/w400";

    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      return "assets/img/noimage.png";      
    }
  }

}
