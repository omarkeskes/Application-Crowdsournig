import { Component, OnInit }  from '@angular/core';
import {Router} from '@angular/router';
import { IdeaService } from './idea.service';
import {LoginService} from '../home/login.service';
import { Idea } from './idea';

@Component({
    moduleId: module.id,
    templateUrl: 'idea-new.component.html',
    styleUrls:['../../assets/css/idea.css']
})

export class IdeaNewComponent {

    user:any;
    titre:any;
    des1:any;
    des2:any;
    des3:any;
    des4:any;
    des5:any;
    des6:any;

    constructor(private ideaservice:IdeaService,private ls:LoginService,private router:Router){
        this.user = this.ls.user ;
        $("#page-wrapper").css('background','#ffffff');
    }

    creer():void{
        if(this.des1 != "" && this.des2 != "" && this.des3 != "" && this.des4 != "" && this.des5 != "" && this.des6 != ""){
                this.ideaservice.CreerIdea(this.user.data.id,this.titre,this.des1,this.des2,this.des3,this.des4,this.des5,this.des6).subscribe(
            data => {this.ideaservice.getIdeas();
                this.router.navigate(['/ideas']);
        },
            err => {console.log(err)},
            () =>{console.log('complete')}
        )
    }else {
        //msg
    }
    }
    
    

    
}