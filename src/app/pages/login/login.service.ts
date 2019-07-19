import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {


  users: any = environment.users;
  constructor(private http: HttpClient) { }

  getUsers(login:string){
    let result = this.users.filter(user => user.login == login);
    return result[0];
  }
  
  getToken():Observable<any>{
    let httpOptions = {
      
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
   
    let path = 'dev/token';
    let body = {
      grant_type: 'password',
      username: 'noknox',
      password: 'noknox123A!'
    };
    
    return this.http.post<any>(path,body,{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'body',
      responseType: 'json'
        });
  }
}
