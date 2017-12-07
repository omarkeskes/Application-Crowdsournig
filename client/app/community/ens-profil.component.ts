import { Component, OnChanges}  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { EnseignantService } from './enseignant.service';

@Component({
    moduleId: module.id,
    templateUrl: 'community-profil.component.html',
    styleUrls:['../../assets/css/profil.css']
})

export class EnsProfilComponent implements OnChanges{ 

    profilMail:boolean=false;
    community :any;
    specialites: any ;
    experiences : any ;
    email:any;
    param : any ;
    percentage:any;
    enseignantShow:boolean=true;
    profil:boolean=true;

    modif:boolean=false;
    image:any;

    descriptionEdit:boolean=false;

    experienceAdd:boolean=false;
    titreExp:any;
    dateDeb:any;
    dateFin:any;
    des:any;

     specAdd:boolean=false;
    nom:any;

    constructor(private enseignantservice:EnseignantService,private routes : ActivatedRoute){
          this.routes.params.subscribe(params => {
       this.param = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    $("#page-wrapper").css('background','#ffffff');
    console.log(this.param);
       var id = {
            "id" : this.param
        }
             this.enseignantservice.getEnseignant(id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        );
        
    }

    ngOnChanges():void{
        this.percentage= 40;
    }

        editEtd():void{
        this.modif=true;
    }

    checkEtd():void{

        this.enseignantservice.editEns(this.community.id,this.community.nom,this.community.prenom,this.community.profession).subscribe(
            data => {             this.enseignantservice.getEnseignant(this.community.id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        ); },
            err => {console.log(err)},
            () =>{}
        );
        this.modif=false;

    }

    returnEtd():void{
        this.modif=false;
    }

        editDescription():void{
        this.descriptionEdit=true;
    }
        checkDescription():void{

        this.enseignantservice.editDescription(this.community.id,this.community.description).subscribe(
            data => {             this.enseignantservice.getEnseignant(this.community.id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        ); },
            err => {console.log(err)},
            () =>{}
        );
        this.descriptionEdit=false;
    }
        returnDescription():void{
        this.descriptionEdit=false;
    }

       addExperience():void{
        this.experienceAdd=true;
    }

    checkExperience():void{

         this.enseignantservice.addExperience(this.community.id,this.titreExp,this.dateDeb,this.dateFin,this.des).subscribe(
            data => {             this.enseignantservice.getEnseignant(this.community.id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        ); },
            err => {console.log(err)},
            () =>{}
        );
        this.experienceAdd=false;
    }
    returnExperience():void{
        this.experienceAdd=false;
    }

    deleteExperience(id:any):void{
        this.enseignantservice.deleteExperience(id).subscribe(
            data => {             this.enseignantservice.getEnseignant(this.community.id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        ); },
            err => {console.log(err)},
            () =>{}
        );
    }

    addSpec():void{

        this.specAdd=true;
    }
    checkSpec():void{
        this.enseignantservice.addSpecialite(this.community.id,this.nom).subscribe(
            data => {             this.enseignantservice.getEnseignant(this.community.id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        ); },
            err => {console.log(err)},
            () =>{}
        );
        this.specAdd=false;

    }
        returnSpec():void{
            this.specAdd=false;
    }
    
    logData(data:any){
        this.community = data.enseignant ;
        this.experiences = data.experiences;
        this.specialites = data.specialites;
        this.email=data.email;
        console.log(this.community);
        console.log(this.experiences);
    }
    logError(err: any){
        
        console.log(err);
    };
    
}