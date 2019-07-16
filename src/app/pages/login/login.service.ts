import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  private url = 'https://syqkl02isj.execute-api.us-east-1.amazonaws.com/dev';

  users: any = [{
    fullName: 'Lyan',
    login:'lyanmartins',
    password:'adm123'
  },
  {
    fullName:'Administrador',
    login:"admim",
    password:'admim'
  }]
  constructor(private http: HttpClient) { }

  getUsers(login:string){
    let result = this.users.filter(user => user.login == login);
    return result[0];
  }
  
  getToken():Observable<any>{
    let httpOptions = {
      
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
   
    let path = '/token';
    let body = {
      grant_type: 'password',
      username: 'noknox',
      password: 'noknox123A!'
    };
    
    return this.http.post<any>(this.url+path,body,{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'body',
      responseType: 'json'
        });
  }
}
