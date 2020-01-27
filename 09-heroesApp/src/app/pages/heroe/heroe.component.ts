import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new Heroe();

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.heroesService.crearHeroe(this.heroe).subscribe(resp => {
      console.log(resp);
      this.heroe = resp;
    });
  }

}
