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
    trigger('backAnimations', [
      transition(':enter', [
        style({ transform: 'translateX(4em)'}),
        animate('0.75s ease', style({ transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('mapAnimations', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s 2s ease', style({ opacity: 1 })),
      ]),
    ]),
    trigger('btnAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(2em)'}),
        animate('1.5s 2.5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(2em)'}),
        animate('1.5s 3s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PlacesComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/dark-v9';
  currentPlaceOrder = 1;
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
    });
  }

  private initializeMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
      center: [-122.41, 37.75],
      interactive: false
    });
    this.places.forEach(place => new mapboxgl.Marker().setLngLat(place.coords).addTo(this.map));
    this.map.on('load', () => {
        if (this.map.loaded()) {
          setTimeout(() => {
            this.fly(this.places[0].coords);
          }, 500);
        }
    });
  }

  sliderChange() {
    this.currentPlace = this.places[this.currentPlaceOrder - 1];
    this.fly(this.currentPlace.coords);
  }

  updateCurrentPlace(place) {
    this.currentPlace = place;
    this.currentPlaceOrder = place.order;
    this.fly(place.coords);
  }

  previousPlace() {
    if (this.currentPlaceOrder > 1) {
      this.updateCurrentPlace(this.places[this.currentPlaceOrder - 2]);
    }
  }

  nextPlace() {
    if (this.currentPlaceOrder < this.places.length) {
      this.updateCurrentPlace(this.places[this.currentPlaceOrder]);
    }
  }

  fly(coords) {
    this.map.flyTo({
      zoom: 5,
      center: coords
    });
  }
}
