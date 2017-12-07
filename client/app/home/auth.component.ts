import { Component } from '@angular/core';
import {LoginService} from '../home/login.service';
let $ = require('../../../../../node_modules/jquery/dist/jquery.min.js');

@Component({

    moduleId:module.id,
     templateUrl: 'auth.component.html',
     styleUrls:['../../assets/css/style.css']
    
})

export class AuthComponent {
    username:String;
    password:String ;
    firstname : String ;
    lastname : String ;
    passwordregister : String ;
    as : String ;
    registeremail : String ;
    constructor(private loginservice : LoginService){
        console.log("AuthComponent");
        this.changeTab();
        this.change();
        $("#page-wrapper").css('background','#c1bdba');
       
    }
    authenticate(event:any){
        var data = {
            "username" : this.username,
            "password" : this.password
        }
        console.log(data);
        this.loginservice.Authenticate(data);
        this.username ="";
        this.password = "";
    }
    changeTab(){
        $('.tab a').on('click', function (e:any) {
        console.log('test');
         e.preventDefault();
  
            $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
  
  var target = $(this).attr('dest');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});
    }
    change(){
       $('.form').find('input, textarea').on('keyup blur focus', function (e:any) {
        var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }
}
    );
}
register(){
    var data = {
        "firstname" : this.firstname ,
        "lastname" : this.lastname ,
        "registeremail" : this.registeremail,
        "as" : this.as ,
        "passwordregister" : this.passwordregister
    }
    console.log(data);
    this.loginservice.Register(data);
}
 }