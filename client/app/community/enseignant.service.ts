import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class EnseignantService {
    data : any ;
    err : any ;
    enseignants : any ;
    constructor(private _http: Http) { 
        this.getEnseignants();
    }
    getEnseignants(){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.get('http://localhost:3000/api/enseignants').map(res => res.json()).subscribe(
            data =>{this.logdataEnseignants(data);}
        );
    }

    logdataEnseignants(data:any){
        console.log(data)
        this.enseignants = data ;
    }
        getEnseignant(id:any){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
       return this._http.post('http://localhost:3000/api/profileEnseignant',JSON.stringify(id),{headers:headers}).map(res => res.json());
    }

        editEns(id:any,nom:any,prenom:any,profession:any){
          var data = {
            "id": id,
	        "nom" : nom,
            "prenom" : prenom,
            "profession" : profession
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/editEns',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
 
    }
            editDescription(id:any,des:any){
     var data = {
            "id": id,
	        "des" : des
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/description',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
    }
            addExperience(id:any,titre:any,dateDeb:any,dateFin:any,des:any){
     var data = {
            "id": id,
	        "des" : des,
            "titre":titre,
            "dateDeb":dateDeb,
            "dateFin":dateFin
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/experience',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
    }

    deleteExperience(id:any){
        var data={"id":id};
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/deleteExperience',JSON.stringify(data),{headers:headers}).map(res=>res.json());   

    }

        addSpecialite(id:any,nom:any){
     var data = {
            "id": id,
	        "nom" : nom
        } ;
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/specialite',JSON.stringify(data),{headers:headers}).map(res=>res.json());   
    }


     logData(data:any){
        if(data.success){
            console.log('test');
            
        }
    }
    logError(err: any){
        
        console.log(err);
    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}