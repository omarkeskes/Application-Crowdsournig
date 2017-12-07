import { Component, OnChanges}  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { EtudiantService } from './etudiant.service';


@Component({
    moduleId: module.id,
    templateUrl: 'community-profil.component.html',
    styleUrls:['../../assets/css/profil.css']
})

export class EtudiantProfilComponent implements OnChanges{ 

profilMail:boolean=true;
    community :any;
    competences: any ;
    experiences : any ;
    diplomes : any ;
    email:any;
    param : any ;
    percentage:any;
    etudiantShow:boolean=true;
    emailShow:boolean=false;
    mail:any;

    constructor(private etudiantservice:EtudiantService,private routes : ActivatedRoute){
          $("#page-wrapper").css('background','#ffffff');
          this.routes.params.subscribe(params => {
       this.param = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    console.log(this.param);
       var id = {
            "id" : this.param
        }
             this.etudiantservice.getStudent(id).subscribe(
            data => this.logData(data),
            err => this.logError(err),
            () => console.log('Quote Complete')
        );
        
    }

    ngOnChanges():void{
        this.percentage= 40;
    }
    
    logData(data:any){
        this.community = data.etudiant ;
        this.experiences = data.experiences;
        this.competences = data.competences;
        this.diplomes = data.diplomes;
        this.email=data.email;
        console.log(this.community);
        console.log(this.experiences);
        console.log(this.competences);
    }
    logError(err: any){
        
        console.log(err);
    };

    writeMail(){
        this.emailShow=true;
    };

    sentMail(){
        this.emailShow=false;
        

    };

    returnMail(){
        this.emailShow=false;
        
    }
    
}