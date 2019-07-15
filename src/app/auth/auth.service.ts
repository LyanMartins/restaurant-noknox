import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | boolean
  {
    console.log(localStorage['token']);
    if (localStorage['token'] != "null") {
      return true;
    }else{
      this.router.navigate(['/login']);
    }
  }
}
