import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Idea } from './idea';

@Injectable()
export class IdeaService {
    ideas : any ;
    comments : any ;
    constructor(private _http: Http) { 
        console.log('Service idea initialisé');

        this._http.get('http://localhost:3000/api/ideas').map(res => res.json()).subscribe(
            data => this.logData(data),
            err => this.logData(err),
            () => 'Quote complete'
        ) ;
    }
    getIdeas(){
        this._http.get('http://localhost:3000/api/ideas').map(res => res.json()).subscribe(
            data => this.logData(data),
            err => this.logData(err),
            () => 'Quote complete'
        ) ;
    }
    getNotes(id:any){
        var data = {
            'id' : id
        }
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/getNotes',JSON.stringify(data),{headers:headers}).map(res=>res.json());;
    }
    getDescriptions(id:any){
        var data = {
            'id' : id
        }
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/getDescriptions',JSON.stringify(data),{headers:headers}).map(res=>res.json());
    }
    getComments(id:any){
        var data = {
            'id' : id
        }
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/getComments',JSON.stringify(data),{headers:headers}).map(res=>res.json());
    }
    getJoin(data:any){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/checkjoin',JSON.stringify(data),{headers:headers}).map(res=>res.json());
    }
    acceptrefusjoin(data:any){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/idea/modifyjoinstudent',JSON.stringify(data),{headers:headers}).map(res=>res.json());
    }
    logData(data :any){
        var element ;
        
        data.forEach((element : any) => {
            var s = 0 ;
            element.notemoyenne.forEach((el : any) => {
                s = s + el ;
            });
            element.notemoyenne = s/element.notemoyenne.length ;
        });
        this.ideas = data;
        console.log(data);
    }
    logErr(err:any){
        console.log(err);
    }
    rejoindreIdea(id_etd:any,id_prop:any,ass:any){
        var data = {
            "id_prop": id_prop,
	        "id_etd" : id_etd,
            "as" : ass
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/idea/joinstudent',JSON.stringify(data),{headers:headers}).map(res=>res.json());
    }
    followIdea(login:any,id_idee:any){
        var data = {
            "id_idee": id_idee,
	        "login" : login
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/idea/follow',JSON.stringify(data),{headers:headers}).map(res=>res.json());
    }
    checkfollowIdea(login:any,id_idee:any){
        var data = {
            "id_idee": id_idee,
	        "login" : login
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/idea/checkfollow',JSON.stringify(data),{headers:headers}).map(res=>res.json());
    }
    getTeam(id_prop:any){
        var data = {
            "id_prop": id_prop
        }
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/idea/getTeam',JSON.stringify(data),{headers:headers}).map(res=>res.json());
    }
    AddComment(id_user:any,id_prop:any,comment:any){
     var data = {
            "id_prop": id_prop,
	        "id_user" : id_user,
            "commentaire" : comment
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/idea/postcomment',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
    }
    AddNote(data:any){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/idea/AddNote',JSON.stringify(data),{headers:headers}).map(res=>res.json());
    }
        CreerIdea(id_user:any,titre:any,des1:any,des2:any,des3:any,des4:any,des5:any,des6:any){
     var data = {
	        "id_user" : id_user,
            "titre" : titre,
            "des1":des1,
            "des2":des2,
            "des3":des3,
            "des4":des4,
            "des5":des5,
            "des6":des6,
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/idea/creer',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
    }

    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}