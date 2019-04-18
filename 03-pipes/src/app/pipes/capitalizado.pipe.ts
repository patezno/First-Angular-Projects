import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {

    transform(value: string, todas: boolean = true): string {

        value = value.toLowerCase();

        const nombre = value.split(' ');

        if (todas) {

            // tslint:disable-next-line: forin
            for (const i in nombre) {
                nombre[i] = nombre[i][0].toUpperCase() + nombre[i].substr(1);
            }
        } else {
            nombre[0] = nombre[0][0].toUpperCase() + nombre[0].substr(1);
        }



        return nombre.join(' ');
    }
}
