import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {FirestoreService} from '../../shared/services/firebase/firestore/firestore.service';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  animations: [
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
export class PlacesComponent implements OnInit, OnDestroy {
  pageHeader = 'places';
  pageSubheader = 'where we\'ve been, where we are...';
  pageExplanation = 'One of the first questions that consistently arise upon getting to know somebody new has been, "where did you grow ' +
    'up?" And I personally find it fascinating to listen to the other person\'s rundown of where they were born, grew up, and lived ' +
    'throughout the years.';
  pageTech = 'This page makes use of the Mapbox api and data retrieved from the Firestore NoSQL database.';
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/dark-v9';
  currentPlaceOrder = 1;
  currentPlace: any;
  places = [];
  placesSubscription: Subscription;

  constructor(private firestoreService: FirestoreService) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this. placesSubscription = this.firestoreService.places.valueChanges().subscribe(places => {
      this.places = places.sort((a, b) => a.order - b.order);
      this.currentPlace = this.places[0];
      this.initializeMap();
    });
  }

  ngOnDestroy() {
    this.placesSubscription.unsubscribe();
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
