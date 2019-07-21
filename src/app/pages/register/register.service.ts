import { Injectable } from '@angular/core';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  addUser(name: string, login:string, password: string){

    try {

      let user = {
        fullName: name,
      	login: login,
      	password: password
      }
      let addNew = environment.users.push(user);
      
      return (addNew) ? true: false;

    } catch (error) {
      return false;
    }
    
    
  }
}
