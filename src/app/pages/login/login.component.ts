import { Component, OnInit, Input, HostBinding  } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  animations: [
    trigger('FadeInOut',[
      state('open',style({ opacity: 1 })),
      state('close',style({ opacity:0 })),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() login:string;
  @Input() password:string;
  request: any;
  message: string;

  constructor(private routes:Router,
              private loginService:LoginService) { }

  ngOnInit() {
  }

  Login(){
    console.log('entrou')
    let user = this.loginService.getUsers(this.login);
    if(user){
      if(this.login == user.login && this.password == user.password){
        
        this.loginService.getToken().subscribe((res) =>{
          localStorage['token'] = res.access_token
          environment.auth = res.access_token
          this.redirect();
        })
        
      }else{
        this.message = "Enter a valid username and password!"
      }
    }else{
      this.message = "Enter a valid username and password!"
    }
    
  }
  redirect(){
    this.routes.navigate(['']);
  }
}
