import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
  constructor() { }

  getUsers(login:string){
    let result = this.users.filter(user => user.login == login);
    return result;
  }
}
