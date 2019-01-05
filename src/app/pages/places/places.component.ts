import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {FirestoreService} from '../../shared/services/firebase/firestore/firestore.service';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  animations: [
    trigger('headerAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-0.5em)'}),
        animate('2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1.5s .5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PlacesComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/dark-v9';
  places = [];

  constructor(private firestoreService: FirestoreService) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.firestoreService.places.valueChanges().subscribe(places => {
      this.places = places.sort((a, b) => a.order - b.order);
      this.initializeMap();
      this.map.on('load', () => {
        if (this.map.loaded()) {
          this.fly(this.places[0].coords);
        }
      });
    });
  }

  private initializeMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
      center: ['-122.41', '37.75'],
      interactive: false
    });
    this.places.forEach(place => new mapboxgl.Marker().setLngLat(place.coords).addTo(this.map));
  }

  fly(coords) {
    this.map.flyTo({
      zoom: 5,
      center: coords
    });
  }
}
