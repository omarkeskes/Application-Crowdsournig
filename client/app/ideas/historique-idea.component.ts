import { Component,OnInit}  from '@angular/core';
import {Router} from '@angular/router' ;
import { IdeaService } from './idea.service';
import { Idea } from './idea';

@Component({
    moduleId: module.id,
    templateUrl: 'historique-idea.component.html',
    styleUrls:['../../assets/css/shop-homepage.css']
})

export class HistoriqueIdeaComponent implements OnInit {
        

    ideas :  any[] ;
    constructor(private is:IdeaService,private router:Router){
        this.ideas = this.is.ideas ;
        $("#page-wrapper").css('background','#ffffff');
           }
           
    ngOnInit(): void {
            setInterval(() =>{
                this.ideas = this.is.ideas ;    
            },100);
            

        }


}