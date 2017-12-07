import {  PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'entrepriseFilter'
})
export class EntrepriseFilterPipe implements PipeTransform {

    transform(value: any[], filterBy: string ): any {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((community: any) =>
            community.nom.toLocaleLowerCase().indexOf(filterBy) !== -1 || 
            community.adresse.toLocaleLowerCase().indexOf(filterBy) !== -1 ) : value;
    }
}