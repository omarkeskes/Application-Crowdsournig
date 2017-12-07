import {Injectable} from '@angular/core' ;
import {Http,Headers,Response} from '@angular/http' ;
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
        user : any ;
        //data : any ;
        //err : any ;
    constructor(private http:Http,private router:Router ){
        console.log(' Service Initializied...')
    }
    CurrentUser(){
        return this.http.get('/auth/currentUser').map(res => res.json()).subscribe(
    data => this.logData(data),
    err => this.logError(err),
    () => console.log('Quote Complete')
  );

    }
    Authenticate(data : any){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
 //       console.log(data);
        return this.http.post('/auth',JSON.stringify(data),{headers:headers}).map(res => res.json()).subscribe(
    data => this.logData(data),
    err => this.logError(err),
    () => console.log('Quote Complete')
  );

    }
    logOut(){
        this.user = null ;
        return this.http.get('/logout').map(res=>res.json());
    }
    Register(data:any){
        var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this.http.post('/auth/Register',JSON.stringify(data),{headers:headers}).map(res => res.json()).subscribe(
    data => this.logData(data),
    err => this.logError(err),
    () => console.log('Quote Complete')
  );
    }
    logData(data:any){
        if(data.success){
            this.user = data.userdata ;
            this.router.navigate(['/']);
    }else if (data.login){
        console.log(data);
        this.user = data ;
        //this.router.navigate(['/']);
    }
        console.log(data);
    }
    logError(err: any){
        this.router.navigate(['/auth']);
        console.log(err);
    }
    Requests : null ;
        getRequesttoJoin(id:any){
            var data = {
                "id" : id
            };
            var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this.http.post('/api/idea/getjoin',JSON.stringify(data),{headers:headers}).map(res => res.json());
    }
    getNotifications(login:any){
        var data = {
                "id" : login
            };
            var headers = new Headers();
        headers.append('Content-type','Application/json');
        return this.http.post('/api/notifications/',JSON.stringify(data),{headers:headers}).map(res => res.json());
    }
    
    
}