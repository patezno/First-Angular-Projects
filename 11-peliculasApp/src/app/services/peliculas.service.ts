import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '6b6b33eb4942fd739eaf2a8a4d671e17';
  private urlMoviedb = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

  getPopulares() {
    const url = `${this.urlMoviedb}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map((res: any) => res.results));
  }

  buscarPeliculas(text: string) {
    const url = `${this.urlMoviedb}search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map((res: any) => res.results));
  }
}
