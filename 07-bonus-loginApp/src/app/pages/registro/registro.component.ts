import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;

  constructor() { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.usuario.email = 'patezno97@gmail.com';
  }

  onSubmit() {
    console.log('Formulario enviado', this.usuario);
  }


}
