import {  PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'enseignantFilter'
})
export class EnseignantFilterPipe implements PipeTransform {

    transform(value: any[], filterBy: string ): any {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((community: any) =>
            community.nom.toLocaleLowerCase().indexOf(filterBy) !== -1 || 
            community.prenom.toLocaleLowerCase().indexOf(filterBy) !== -1 ) : value;
    }
}