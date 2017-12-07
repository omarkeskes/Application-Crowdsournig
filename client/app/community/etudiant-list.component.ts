import { Component}  from '@angular/core';

import { EntrepriseService } from './entreprise.service';
import { EtudiantService } from './etudiant.service';
import { EnseignantService } from './enseignant.service';

@Component({
    moduleId: module.id,
    templateUrl: 'community-list.component.html',
    styleUrls:['../../assets/css/round-about.css']
})

export class EtudiantListComponent  { 
    communities : null;
    title: string = 'Etudiants';
    etudiantShow: boolean = true;
    listFilter: string;

    constructor(private etudiantservice : EtudiantService){
        $("#page-wrapper").css('background','#ffffff');
        console.log("started");
        //this.etudiantservice.getStudents().subscribe(students => this.communities = students);
        /*var x = setInterval(()=>{
            if(!this.communities){*/
                this.communities = this.etudiantservice.students;
            /*}else {
                console.log(this.communities);
                clearInterval(x)
        }   
        },100)
        */
        
    }
}