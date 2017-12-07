import { Component,OnInit}  from '@angular/core';
import {Router} from '@angular/router' ;
import { IdeaService } from './idea.service';
import { Idea } from './idea';
@Component({
    moduleId: module.id,
    templateUrl: 'idea-list.component.html',
    styleUrls:['../../assets/css/shop-homepage.css'],
    
})

export class IdeaListComponent implements OnInit {
        

    ideas :  any[] ;
    constructor(private is:IdeaService,private router:Router){
        this.ideas = this.is.ideas ;

        this.ideas.sort((a,b) => {
             if (a.notemoyenne > b.notemoyenne) return -1;
            else if (a.notemoyenne < b.notemoyenne) return 1;
             else return 0;
        })
        $("#page-wrapper").css('background','#ffffff');
           }
           
    ngOnInit(): void {
            setInterval(() =>{
                this.ideas = this.is.ideas ;    
            },100);
            

        }


}