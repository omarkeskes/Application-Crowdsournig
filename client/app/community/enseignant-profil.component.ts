import { Component, OnChanges}  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { EnseignantService } from './enseignant.service';

@Component({
    moduleId: module.id,
    templateUrl: 'community-profil.component.html',
    styleUrls:['../../assets/css/profil.css']
})

export class EnseignantProfilComponent implements OnChanges{ 

profilMail:boolean=true;
emailShow:boolean=false;
    community :any;
    specialites: any ;
    experiences : any ;
    email:any;
    param : any ;
    percentage:any;
    enseignantShow:boolean=true;

    constructor(private enseignantservice:EnseignantService,private routes : ActivatedRoute){
        $("#page-wrapper").css('background','#ffffff');
          this.routes.params.subscribe(params => {
       this.param = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
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