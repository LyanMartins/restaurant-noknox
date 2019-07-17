import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { 
    mapboxgl.accessToken = 'pk.eyJ1IjoibHlhbm1hcnRpbnMiLCJhIjoiY2p5NmthajdnMGVjZzNxcHRtOTg1MHl1NiJ9.ZvzYhogVQX2vF5igf7rqyg'
  }

 

  
}
