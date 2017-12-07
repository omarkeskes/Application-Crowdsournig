import { Component,OnInit}  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IdeaService } from './idea.service';
import { Idea } from './idea';
import {LoginService} from '../home/login.service';
@Component({
    moduleId: module.id,
    templateUrl: 'idea-detail.component.html',
        styleUrls:['../../assets/css/shop-item.css',
        '../../assets/css/idea.css']
})

export class IdeaDetailComponent implements OnInit  { 
    idea : any;
    descriptions : any ;
    comments : any ;
    notes : any ;
    currentUser : any ;
    teamens : any ;
    teamstud : any ;
    comment :String;
    join : boolean = false ;
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private is: IdeaService,
                private ls:LoginService) {
                    $("#page-wrapper").css('background','#ffffff');
    }
    ngOnInit(): void {
        this.currentUser = this.ls.user ;
        var rating = $("#rating");

        this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.idea = this.is.ideas[id-1];
        });
        console.log(this.idea.notemoyenne)
        if(isNaN(this.idea.notemoyenne)){
            rating.html('<span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
        }
        else if(this.idea.notemoyenne < 2 ){
            rating.html('<span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
        }else if(this.idea.notemoyenne > 2 && this.idea.notemoyenne < 4 ){
                    rating.html('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>')
        }else if(this.idea.notemoyenne > 3 && this.idea.notemoyenne <6){
            rating.html('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>')
        }else if(this.idea.notemoyenne > 4 && this.idea.notemoyenne <8){
            rating.html('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span>')
        }else {
            rating.html('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>')
        }
        this.is.getNotes(this.idea.id).subscribe(
                    data => {this.notes = data},
                    err => {console.log(err)},
                    () => {console.log(this.notes)}
                )
        this.is.getDescriptions(this.idea.proposition.id_prop).subscribe(
                    data => {this.descriptions = data ;},
                    err => {console.log('err')},
                    () =>{console.log(this.descriptions)}
        ) ;
        this.is.getComments(this.idea.proposition.id_prop).subscribe(
                    data => {this.comments = data;
                       
                },
                    err => {console.log(err)},
                    () => {console.log(this.comments)}
        );
        this.is.getTeam(this.idea.proposition.id_prop).subscribe(
                    data => {console.log(data);this.teamens = data.enseignant;this.teamstud = data.student;console.log(this.teamstud)},
                    err => {console.log(err)},
                    () =>{}
                )
                if (this.currentUser.as == 'student'){
                    var x = {
                        as : 'student',
                        id : this.currentUser.data.id,
                        prop_id : this.idea.proposition.id_prop
                    }
                    this.is.getJoin(x).subscribe(
                        data => {this.join = data.join;console.log(this.join);
                            if(this.join){
                               $("#rejoindre").text("invitation envoyée");$("#rejoindre").removeClass("btn-success") 
                            }
                    },
                        err => {console.log(err)},
                        () => {console.log('complete')}
                    )
                }
               /* this.is.checkfollowIdea(this.currentUser.login,this.idea.proposition.id_prop).subscribe(
                    data =>{if (data.success){
                $("#follow").text("abonné");$("#follow").removeClass("btn-success")
            }},
            err =>{},
            () => {}
                )*/
    }
    joinIdea(){
        if(this.currentUser.as == 'student'){
           var id_etd = this.currentUser.data.id ;
           var id_prop = this.idea.proposition.id_prop ;
           this.is.rejoindreIdea(id_etd,id_prop,this.currentUser.as).subscribe(
               data=>{$("#rejoindre").text("invitation envoyée");$("#rejoindre").removeClass("btn-success")},
               err => {console.log(err)},
               () => {console.log('complete')}
           );
        }else if (this.currentUser.as == 'enseignant'){
            var id_etd = this.currentUser.data.id ;
           var id_prop = this.idea.proposition.id_prop ;
           this.is.rejoindreIdea(id_etd,id_prop,this.currentUser.as).subscribe(
               data=>{$("#rejoindre").text("déja membre");$("#rejoindre").removeClass("btn-success")},
               err => {console.log(err)},
               () => {console.log('complete')}
           );
        }
    }
    addComment(){
        var id_user = this.currentUser.login ;
        var id_prop = this.idea.proposition.id_prop ;
        var comment = this.comment ;
        console.log(comment);
        this.is.AddComment(id_user,id_prop,comment).subscribe(
            data => {this.is.getComments(this.idea.proposition.id_prop).subscribe(
                    data => {this.comments = data},
                    err => {console.log(err)},
                    () => {console.log(this.comments)}
                );},
            err => {console.log(err)},
            () =>{}
        );
        this.comment = '';
    }
    showPopup(){
        $("#myModal").show();
    }
    originalite : string ;
    creativite : string ;
    rentabilite:string ;
    addNote(){
        var data = {
            "enseignant_id" : this.currentUser.data.id,
            "idea_id" : this.idea.id,
            "creativite" : this.creativite,
            "originalite" : this.originalite,
            "rentabilite" : this.rentabilite
        }
        console.log(data) ;
        this.is.AddNote(data).subscribe(
            data => {if(data.success){
                console.log("note ajoutée");
                this.is.getNotes(this.idea.id).subscribe(
                    data => {this.notes = data},
                    err => {console.log(err)},
                    () => {console.log(this.notes)}
                )
            }},
            err => {console.log(err)},
            () =>{console.log('complete')}
        )
    }
    followIdea(){
        var id_idee = this.idea.propositions.id_prop ;
        var login = this.currentUser.login;
        this.is.followIdea(login,id_idee).subscribe(
            data =>{if (data.success){
                $("#follow").text("abonné");$("#follow").removeClass("btn-success")
            }},
            err =>{},
            () => {}
        )
    }
}