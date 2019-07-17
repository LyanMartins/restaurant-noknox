import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuisines: any;
  restaurants: any;

  lat: String = '-23.5601802';
  log: String = '-46.6503273';

  @Input() ids: String ;

  constructor(private homeService:HomeService) {
    this.allCuisine()
    console.log('construc');
  }

  ngOnInit() {
    console.log('init');
    console.log(this.cuisines);
  }

  allCuisine(){
    this.homeService.getCuisine(this.lat,this.log).subscribe(res => this.cuisines = res);
  }
  findRestaurants(){
    this.homeService.getRestaurant(this.lat,this.log,this.ids).subscribe(res => this.restaurants = res);
  }
} 
