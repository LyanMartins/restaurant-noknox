import { Component, OnInit } from '@angular/core';

import { GeoJson,FeatureCollection } from '../map';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';


@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  //default
  map: mapboxgl.Map;
  style: 'mapbox://styles/mapbox/streets-v11';
  lat: Number = -23.5601802;
  lng: Number = -46.6503273;
  message = "Maps";

  //data
  source: any;
  markers: any;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.initializeMap()
    this.map.invalidateSize();
    this.map.resize();
  }

  private initializeMap(){

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lat,this.lng]
        })
      }) 
    }
    this.buildMap()
  }

  buildMap(){
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoon:13,
      center: [this.lat,this.lng]
    })

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', (event) => {
      
      this.map.addLayer({
        id:'local',
        source:'local',
        type:'symbol',
        layout:{
          'text-field':'Local',
          'icon-image':'rocket-15'
        }
      })
  
    })

  } 




}
