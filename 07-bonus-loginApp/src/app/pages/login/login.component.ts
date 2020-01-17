import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.logIn(this.usuario).subscribe(response => {
      console.log('LogIn', response);
    }, err => {
      console.log('Error logIn', err);
    });
  }

}
