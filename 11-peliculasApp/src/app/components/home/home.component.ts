import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera = [];
  populares = [];
  ninos = [];

  constructor(public peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getCartelera().subscribe(data => this.cartelera = data);
    this.peliculasService.getPopulares().subscribe(data => this.populares = data);
    this.peliculasService.getPopularesNinos().subscribe(data => this.ninos = data);
  }

}
