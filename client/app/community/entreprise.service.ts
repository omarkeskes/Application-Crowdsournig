import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class EntrepriseService {
    data : any ;
    err : any ;
    
    constructor(private _http: Http) { }
    getEntreprises(){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this._http.get('http://localhost:3000/api/entreprises').map(res => res.json());

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