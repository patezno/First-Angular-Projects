import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  callback: string;
  busqueda: string;

  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.peliculasService.getPelicula(params.id).subscribe(data => {
        this.pelicula = data;
      });
      this.callback = params.pag;
      if (params.busqueda) {
        this.busqueda = params.busqueda;
      }
    });
  }

}
