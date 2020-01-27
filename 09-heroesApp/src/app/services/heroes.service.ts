import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url = 'https://login-app-88021.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearHeroe(heroe: Heroe) {
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(map((resp: any) => {
      heroe.id = resp.name;
      return heroe;
    }));
  }

  actualizarHeroe(heroe: Heroe) {
    const heroeTemp = {
      ...heroe
    };
    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`).pipe(map(this.crearArreglo));
  }

  private crearArreglo(heroesObj) {
    const heroes: Heroe[] = [];

    if (heroesObj === null) {
      return [];
    }

    Object.keys(heroesObj).forEach(key => {
      const heroe: Heroe = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });
    return heroes;
  }

  getHeroe(id: string) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }
}
