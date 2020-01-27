import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new Heroe();

  constructor() { }

  ngOnInit() {
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }

}
