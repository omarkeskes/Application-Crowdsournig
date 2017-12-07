import { Component,OnInit} from '@angular/core';
import {LoginService} from './login.service' ;
 
@Component({

    moduleId:module.id,

     templateUrl: 'home.component.html',
     styleUrls:['../../assets/css/landing-page.css']

})

export class HomeComponent implements OnInit {
        ngOnInit(): void {
            var x = setInterval(function(){
                    if(!this.user){
                        this.user =  this.ls.user.data ;
                    }else {
                        clearInterval(x);
                    }
            })
        }

        user : null ;
        constructor(private ls:LoginService){
            $("#page-wrapper").css('background','#ffffff');
            
        }

 }