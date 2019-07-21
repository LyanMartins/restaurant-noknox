import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LoginService } from '../login/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  animations: [
    trigger('FadeInOut',[
      state('open',style({ opacity: 1 })),
      state('close',style({ opacity:0 })),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() name: string;
  @Input() login: string; 
  @Input() password: string;

  message: any;

  constructor(private registerService: RegisterService,
              private loginService: LoginService,
              private routes:Router) { }

  ngOnInit() {
  }

  register(){

    var addNew =  this.registerService.addUser(this.name,this.login,this.password);
    if(addNew){
      this.loginService.getToken().subscribe((res) =>{
        localStorage['token'] = res.access_token
        environment.auth = res.access_token
        this.redirect();
        console.log('local :'+localStorage['token'])
        console.log('environment :'+environment.auth)
      });
    }else{
      this.message = "Enter valid data to register!"
    }

  }
  redirect(){
    this.routes.navigate(['/logando']);
  }

}
