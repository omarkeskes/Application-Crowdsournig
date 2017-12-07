import { Component,OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { EtudiantService } from './etudiant.service';

@Component({
    moduleId: module.id,
    templateUrl: 'community-profil.component.html',
    styleUrls:['../../assets/css/profil.css']
})

export class ProfilComponent implements OnInit  { 
    
    profilMail:boolean=false;
    id : any;
    community :any;
    competences: any ;
    experiences : any ;
    diplomes : any ;
    email:any;
    param : any ;
    percentage:any;
    profil:boolean=true;
    etudiantShow:boolean=true;

    modif:boolean=false;
    image:any;

    descriptionEdit:boolean=false;

    experienceAdd:boolean=false;
    titreExp:any;
    dateDeb:any;
    dateFin:any;
    des:any;

    competenceAdd:boolean=false;
    nom:any;
    niveau:any;

    diplomeAdd:boolean=false;
    nomDip:any;
    annee:any;
    ecole:any;
     ngOnInit(): void{
         this.routes.params.subscribe(params => {
       this.param = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    console.log(this.param);
       this.id = {
            "id" : this.param
        }
                    this.etudiantservice.getStudent(this.id).subscribe(

            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        );      
     }
    constructor(private etudiantservice:EtudiantService,private routes : ActivatedRoute){
          $("#page-wrapper").css('background','#ffffff');
               
    }

    editEtd():void{
        this.modif=true;
    }

    checkEtd():void{

        this.etudiantservice.editEtd(this.community.id,this.community.nom,this.community.prenom,this.community.classe,this.community.tel,this.community.adresse).subscribe(
            data => {             this.etudiantservice.getStudent(this.community.id).subscribe(
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
        this.etudiantservice.editDescription(this.community.id,this.community.description).subscribe(
            data => { this.etudiantservice.getStudent(this.id).subscribe(
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
        var experience = {date_deb:this.dateDeb,date_fin:this.dateFin,etudiantId:this.community.id,description:this.des,titre:this.titreExp} ;
         this.etudiantservice.addExperience(this.community.id,this.titreExp,this.dateDeb,this.dateFin,this.des).subscribe(
            data => {this.etudiantservice.getStudent(this.id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        );},
            err => {console.log(err)},
            () =>{}
        );
        this.experienceAdd=false;
    }
    returnExperience():void{
        this.experienceAdd=false;
    }

    deleteExperience(id:any):void{
        this.etudiantservice.deleteExperience(id).subscribe(
            data => {
            console.log("delete experience");
            this.etudiantservice.getStudent(this.id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        ); },
            err => {console.log(err)},
            () =>{}
        );
    }

    addCompetence():void{

        this.competenceAdd=true;
    }
    checkCompetence():void{
        this.etudiantservice.addCompetence(this.community.id,this.nom,this.niveau).subscribe(
            data => { this.etudiantservice.getStudent(this.id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        ); },
            err => {console.log(err)},
            () =>{}
        );
        this.competenceAdd=false;

    }
        returnCompetence():void{
            this.competenceAdd=false;
    }

        addDiplome():void{
        this.diplomeAdd=true;
    }

    checkDiplome():void{

         this.etudiantservice.addDiplome(this.community.id,this.nomDip,this.annee,this.ecole).subscribe(
            data => {             this.etudiantservice.getStudent(this.id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        ); },
            err => {console.log(err)},
            () =>{}
        );
        this.diplomeAdd=false;
    }
    returnDiplome():void{
        this.diplomeAdd=false;
    }
    logData(data:any){
        this.community = data.etudiant ;
        this.experiences = data.experiences;
        this.competences = data.competences;
        this.competences.forEach(function(element:any) {
            var niv = element.niveau * 10;
            element.niveau = niv.toString();
        });
        this.diplomes = data.diplomes;
        this.email=data.email;
        console.log(this.community);
        console.log(this.experiences);
        console.log(this.competences);
    }
    logError(err: any){
        
        console.log(err);
    };
    
}