import { Injectable } from '@angular/core';
import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { 
    mapboxgl.accessToken = 'sk.eyJ1IjoibHlhbm1hcnRpbnMiLCJhIjoiY2p5Nm56ZWZpMGtrcDNtbGk5N2hqMnBiNyJ9.XeiCS_9ZgBJiRbEmqAmo1A'
  }

 

  
}
