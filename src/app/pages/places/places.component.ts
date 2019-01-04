import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FirestoreService} from '../../shared/services/firebase/firestore/firestore.service';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-0.5em)'}),
        animate('2000ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PlacesComponent implements OnInit {
  places = [];


  /// default settings
  map: mapboxgl.Map;
  seoul = new mapboxgl.LngLat(127.02, 37.53);
  style = 'mapbox://styles/mapbox/dark-v9';
  lat = 37.75;
  lng = -122.41;

  constructor(private firestoreService: FirestoreService) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.firestoreService.places.valueChanges().subscribe(places => this.places = places);
    this.initializeMap();
    this.map.on('load', () => {
      if (this.map.loaded()) {
        this.map.flyTo({
          zoom: 4,
          center: this.seoul
        });
      }
    });
  }

  private initializeMap() {
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
      center: [this.lng, this.lat],
      interactive: false
    });
  }

}
