import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      nombre: new FormControl('Carlos'),
      apellido: new FormControl(),
      correo: new FormControl()
    });
  }

  guardarCambios() {
    console.log(this.form.value);
  }

}
