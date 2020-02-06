import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImg'
})
export class PeliculaImgPipe implements PipeTransform {

  transform(pelicula: any, poster: boolean): any {
    const url = 'http://image.tmdb.org/t/p/w500';

    if (!pelicula) {
      return 'assets/noimage.png';
    }
    if (poster) {
      return url + pelicula.poster_path;
    }
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else if (pelicula.poster_path) {
      return url + pelicula.poster_path;
    } else {
      return 'assets/noimage.png';
    }
  }

}
