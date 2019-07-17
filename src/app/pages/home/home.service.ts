import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  

  constructor(private http:HttpClient) { }
  
  getCuisine(lat:String, lng:String):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
   
    let path = 'dev/cuisine';
    let queryString = '?lat='+lat+'&lng='+lng;
    
    return this.http.get(path+queryString,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage['token'],
      }),
      observe: 'body',
      responseType: 'json'
      }).pipe(map((res) => res));
  }

  getRestaurant(lat:String, lng:String, ids:String){
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
   
    let path = 'dev/restaurant';
    let queryString = '?lat='+lat+'&lng='+lng+'&cuisines='+ids;
    
    return this.http.get(path+queryString,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage['token'],
      }),
      observe: 'body',
      responseType: 'json'
      }).pipe(map((res) => res));
  }
}
