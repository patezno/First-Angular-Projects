import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.nuevoUsuario(this.usuario).subscribe(response => {
      console.log('Respuesta firebase', response);
    }, err => {
      console.log('Error', err);
    });
  }


}
