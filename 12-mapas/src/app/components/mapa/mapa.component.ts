import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    const marcador = new Marcador(51.678418, 7.809007);
    this.marcadores.push(marcador);
  }

  ngOnInit() {
  }

  agregarMarcador(event: any) {
    const coords = event.coords;
    const marcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(marcador);

  }
}
