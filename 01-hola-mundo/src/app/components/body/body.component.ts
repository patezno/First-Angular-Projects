import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'YEAH',
        autor: 'sharkpuppet'
    };

    personajes: string[] = ['spiderman', 'venom', 'octopus'];

}