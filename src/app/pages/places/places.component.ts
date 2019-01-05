import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {FirestoreService} from '../../shared/services/firebase/firestore/firestore.service';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';

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
    trigger('mapAnimations', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s 1s ease', style({ opacity: 1 })),
      ]),
    ]),
    trigger('btnAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(2em)'}),
        animate('1.5s 1.5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(2em)'}),
        animate('1.5s 2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PlacesComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/dark-v9';
  currentPlace: any;
  places = [];

  constructor(private firestoreService: FirestoreService) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.firestoreService.places.valueChanges().subscribe(places => {
      this.places = places.sort((a, b) => a.order - b.order);
      this.currentPlace = this.places[0];
      this.initializeMap();
      this.map.on('load', () => {
        if (this.map.loaded()) {
          this.fly(this.places[0]);
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

  fly(place) {
    this.currentPlace = place;
    this.map.flyTo({
      zoom: 5,
      center: place.coords
    });
  }
}
