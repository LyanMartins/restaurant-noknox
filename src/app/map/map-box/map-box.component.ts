import { Component, OnInit } from '@angular/core';

import { GeoJson,FeatureCollection } from '../map';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';
import { HomeComponent } from 'src/app/pages/home/home.component';


@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  //default
  map: mapboxgl.Map;
  style: 'mapbox://styles/mapbox/outdoors-v9';
  lat: Number = -23.5601802;
  lng: Number = -46.6503273;
  message = "Maps";

  //data
  source: any;
  markers: any;

  constructor(private mapService: MapService,
              private homeComponent: HomeComponent) { }

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap(){

    this.buildMap()
  }

  buildMap(){
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [-46.6503273, -23.5601802],
    })
    this.map.on('click', (event) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat]
      const newLocal   = new GeoJson(coordinates, { message: this.message })
      this.markers.remove();
      this.markers.setLngLat(coordinates).addTo(this.map)
      //marker.setLngLat(coordinates).addTo(this.map);
      this.flyTo(newLocal)
      let newLoction = this.homeComponent.newLocalization(event.lngLat.lng,event.lngLat.lat)
      if(newLoction){
        this.homeComponent.allCuisine();
      }

    })
    this.map.on('load', (event) => {

      this.map.addSource('local', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [this.lng, this.lat],
              },
            }]
          }
      });
      
      this.markers = new mapboxgl.Marker().setLngLat([this.lng, this.lat]).addTo(this.map);

    })


  } 


 flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    })
  }
}
