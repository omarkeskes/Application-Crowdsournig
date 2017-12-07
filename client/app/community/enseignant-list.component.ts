import { Component}  from '@angular/core';

import { EnseignantService } from './enseignant.service';

@Component({
    moduleId: module.id,
    templateUrl: 'community-list.component.html',
    styleUrls:['../../assets/css/round-about.css']
})

export class EnseignantListComponent  { 
    communities : null;
    title: string = 'Enseignants';
    enseignantShow: boolean = true;
    listFilter: string;

    constructor(private enseignantsservice : EnseignantService){
        $("#page-wrapper").css('background','#ffffff');
        console.log("started");
        //this.enseignantsservice.getEnseignants().subscribe(enseignants => this.communities = enseignants);
        this.communities = this.enseignantsservice.enseignants;/* ;}else {
        console.log(this.communities);*/
    }
}