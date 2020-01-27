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
}
