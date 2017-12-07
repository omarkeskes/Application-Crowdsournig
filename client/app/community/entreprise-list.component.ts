import { Component}  from '@angular/core';

import { EntrepriseService } from './entreprise.service';

@Component({
    moduleId: module.id,
    templateUrl: 'community-list.component.html',
    styleUrls:['../../assets/font-awesome/css/font-awesome.min.css']
})

export class EntrepriseListComponent  { 
    entreprises : any;
    title: string = 'Entreprises';
    entrepriseShow: boolean = true;
    listFilter: string;

    constructor(private entrepriseService : EntrepriseService){
        $("#page-wrapper").css('background','#ffffff');
        console.log("started");
        this.entrepriseService.getEntreprises().subscribe(entreprises => this.entreprises = entreprises);
        console.log(this.entreprises);
    }
    
}