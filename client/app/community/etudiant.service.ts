import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class EtudiantService {
    data : any ;
    err : any ;
    
    constructor(private _http: Http) { 
        this.getStudents();
    }
    getStudents(){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.get('http://localhost:3000/api/students').map(res => res.json()).subscribe(data =>{this.logDataStudents(data)});

    }
        getStudent(id:any){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
       return this._http.post('http://localhost:3000/api/profileStudent',JSON.stringify(id),{headers:headers}).map(res => res.json());
    }
    editEtd(id:any,nom:any,prenom:any,classe:any,tel:any,adresse:any){
          var data = {
            "id": id,
	        "nom" : nom,
            "prenom" : prenom,
            "classe" : classe,
            "tel" : tel,
            "adresse":adresse
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/profil/editEtd',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
 
    }

        editDescription(id:any,des:any){
     var data = {
            "id": id,
	        "des" : des
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/profil/description',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
        }
        addExperience(id: any,titre: any,dateDeb:any,dateFin:any,des:any){
     var data : any  = {
            "id": id,
	        "des" : des,
            "titre":titre,
            "dateDeb":dateDeb,
            "dateFin":dateFin
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/profil/experience',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
    }

    deleteExperience(id:any){
        var data={"id":id};
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/profil/deleteExperience',JSON.stringify(data),{headers:headers}).map(res=>res.json());   

    }

     addCompetence(id:any,nom:any,niveau:any){
     var data = {
            "id": id,
	        "nom" : nom,
            "niveau":niveau
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/profil/competence',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
    }

    addDiplome(id:any,nom:any,annee:any,ecole:any){
     var data = {
            "id": id,
	        "nom" : nom,
            "annee":annee,
            "ecole":ecole
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/profil/diplome',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
    }
     students : any ;
    logDataStudents(data : any){
        console.log(data);
        this.students = data ;
    }
    sendMail(to:any,text:any){
        var data = {
            "to": to,
            "text" : text
        }
         var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/sendmail',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
    }

            
        
    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}