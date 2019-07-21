import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | boolean
  { 
   
    if (localStorage['token']) {
      
      if(localStorage['token'] === environment.auth){

        return true;
      }else{
        this.router.navigate(['/login']);

      }
    }else{
      this.router.navigate(['/login']);
    }
  }
}
