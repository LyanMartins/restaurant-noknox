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
  request: any;


  constructor(private routes:Router,
              private loginService:LoginService) { }

  ngOnInit() {
  }

  Login(){
    let user = this.loginService.getUsers(this.login);
    if(this.login == user.login && this.password == user.password){
      console.log('aqui')
      this.loginService.getToken().subscribe(res => localStorage['token'] = res.access_token )
      //localStorage['token'] = "xyz";
      this.routes.navigate(['']);

    }else{
      return false;
    }
  }
}
