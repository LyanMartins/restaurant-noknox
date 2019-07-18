import { Component, OnInit } from '@angular/core';

import { GeoJson,FeatureCollection } from '../map';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap(){
    // if (navigator.geolocation) {
    //    navigator.geolocation.getCurrentPosition(position => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     this.map.flyTo({
    //       center: [this.lng, this.lat]
    //     })
    //   });
    // }
    this.buildMap()
  }

  buildMap(){
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      
      zoom: 13,
      center: [-46.6503273, -23.5601802],
    })
    
    this.map.on('load', (event) => {

      /// register source
      this.map.addSource('local', {
         type: 'geojson',
         data: {
           type: 'FeatureCollection',
           features: []
         }
      });

      /// get source
      this.source = this.map.getSource('local')
      
      /// create map layers with realtime data
      this.map.addLayer({
        id: 'local',
        source: 'local',
        type: 'symbol',
        layout: {
          'text-field': '',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'rocket-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      })

    })


  } 


 flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    })
  }
}
