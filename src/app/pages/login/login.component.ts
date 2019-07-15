import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() login:string;
  @Input() password:string;

  constructor(private routes:Router,
              private loginService:LoginService) { }

  ngOnInit() {
  }

  Login(){
    let user = this.loginService.getUsers(this.login);
    console.log(user);
    console.log("Login");
    if(this.login == user.login && this.login == user.password){
      console.log("logou");
      this.routes.navigate(['']);
    }else{
      console.log("login ou senha invalidos");
    }
  }

}
