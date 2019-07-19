import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './home.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger('FadeInOut',[
      state('open',style({ opacity: 0, display:'none' })),
      state('close',style({ opacity: 1 })),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1s')]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuisines: any;
  restaurants: any;
  fade: boolean;

  lat: String = '-23.5601802';
  log: String = '-46.6503273';

  @Input() ids: String ;

  constructor(private homeService:HomeService) {
    this.allCuisine()
  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
      this.fade = true;  
  }
  newLocalization(lng,lat){
    try {

      this.lat = lat;this.log = lng;
      return true;
    } catch (error) {

      console.log(error);
      return false;
    }
    
  }
  allCuisine(){
    this.cuisines = [];
    this.homeService.getCuisine(this.lat,this.log).subscribe(res => this.cuisines = res);
  }
  findRestaurants(){
    this.homeService.getRestaurant(this.lat,this.log,this.ids).subscribe(res => this.restaurants = res);
  }
  redirectTo(url){
    window.open(url, "_blank");
  }
  

} 
