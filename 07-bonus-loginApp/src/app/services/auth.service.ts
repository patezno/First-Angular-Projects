import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = '';
  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logOut() {}

  logIn(usuario: Usuario) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}signInWithPassword?key=${this.apikey}`, authData).pipe(map((resp: any) => {
      this.guardarToken(resp.idToken);
      return resp;
    }));
  }

  nuevoUsuario(usuario: Usuario) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}signUp?key=${this.apikey}`, authData).pipe(map((resp: any) => {
      this.guardarToken(resp.idToken);
      return resp;
    }));
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

}
