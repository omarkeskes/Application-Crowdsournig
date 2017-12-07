import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import {LoginService} from './home/login.service';
import {IdeaService} from './ideas/idea.service'
import {Router } from '@angular/router'
import {DOCUMENT} from '@angular/platform-browser'
import * as io from "socket.io-client";

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:['../assets/css/bootstrap.min.css',
            '../assets/css/sb-admin.css',
            '../assets/css/plugins/morris.css',
            '../assets/font-awesome/css/font-awesome.min.css']
  
})

export class AppComponent implements OnInit {
    user : null;
    interval : number ;
    student:boolean=false;
    notify : boolean = false ;
    requeststoJOin:any ;
    notifications : any;
    etd:boolean=true;
    ngOnInit(): void {
         setInterval(() =>{
        if(!(this.user)){
          console.log("trying to get user");
              this.notify = false ;
              this.requeststoJOin = [] ;
              this.notifications = [];
              this.user = this.loginService.user ;

            }else {
                if(this.loginService.user.as == 'student'){
                          this.student=true;
            }else{
              this.student=false;
            }
          if(!this.notify){
            
            this.socket.emit("username",{id: this.loginService.user.data.id , as : this.loginService.user.as });
            this.socket.on('notifyjoin',function(data:any){
              $(".fa-bell").css('color','red');
              //this.requeststoJOin.push(data);
              this.getRequeststojoin();
            })
            this.socket.on('newnotification',function(data:any){
              $(".fa-bell").css('color','red');  
              this.getNotifications();
            })

        this.getRequeststojoin();    
        this.getNotifications();
        this.notify = true ;
              }
              this.interval = 500000 ;
              $('.shownavbar').css('display','block');
              $('.disable-enable').removeClass('disable-enable');
            } 
        },this.interval);
        console.log(this.router.url);
         if (this.document.location.href != 'http://localhost:3000/auth' && !this.user){
           this.loginService.CurrentUser();
         }





    }

      logOut(){   

        this.loginService.logOut().subscribe(
            data => {if (data.success){
                //$('.shownavbar').addClass('disable-enable');//addClass('disable-enable');
                this.user = null ;
                $('.shownavbar').css('display','none');
                this.router.navigate(['/auth']);
                this.interval = 100;
            }},
            err=>{console.log("err")},
            () => {}
        );
        
      }
      

    closePopup(){
        $('#myModal').hide();

    }
    socket: any ;
      constructor(private iS : IdeaService,private loginService:LoginService,private router:Router,@Inject(DOCUMENT) private document: any){
        console.log(this.document.location.href);
         this.socket = io.connect('http://localhost:3000/')

      }
      idprop:any;
      @Input() idetd:any;

      accept(event: any){
        console.log(this.requeststoJOin[parseInt(event.target.value)]);
        var data = {
          "id_prop" : this.requeststoJOin[parseInt(event.target.value)].proposition.id_prop,
          "id_user" : this.requeststoJOin[parseInt(event.target.value)].etudiant.id,
          "accept" : true
        }
        console.log(event.target.value);
        this.iS.acceptrefusjoin(data).subscribe(
          data => {this.loginService.getRequesttoJoin(this.loginService.user.data.id).subscribe(
            data => {this.requeststoJOin = data},
            err => {console.log(err)},
            () => {console.log(this.requeststoJOin)}
        );},
        err =>{console.log(err)},
        () =>{}
        )
      }
      refus(event : any){
        var data = {
          "id_prop" : this.requeststoJOin[parseInt(event.target.value)].proposition.id_prop,
          "id_user" : this.requeststoJOin[parseInt(event.target.value)].etudiant.id,
          "accept" : false
        }
        this.iS.acceptrefusjoin(data).subscribe(
          data => {this.loginService.getRequesttoJoin(this.loginService.user.data.id).subscribe(
            data => {this.requeststoJOin = data},
            err => {console.log(err)},
            () => {console.log(this.requeststoJOin)}
        );},
        err =>{console.log(err)},
        () =>{}
        )
      }
      getNotifications(){
        this.loginService.getNotifications(this.loginService.user.login).subscribe(
            data => {this.notifications = data},
            err => {console.log(err)},
            () => {console.log(this.notifications)}
        );
      }
      getRequeststojoin(){
        this.loginService.getRequesttoJoin(this.loginService.user.data.id).subscribe(
            data => {this.requeststoJOin = data},
            err => {console.log(err)},
            () => {console.log(this.requeststoJOin)}
            
        );
      }
     
 }
