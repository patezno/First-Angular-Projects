import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = '';

  // Sign Up
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Sign In
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }

  logOut() {}

  logIn(usuario: Usuario) {}

  nuevoUsuario(usuario: Usuario) {}
}
