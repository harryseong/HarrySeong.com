import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import {GeoJson} from './map';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFirestore) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  getMarkers(): AngularFirestoreCollection<any> {
    return this.db.collection('markers');
  }

  createMarker(data: GeoJson) {
    return this.db.collection('markers').add(data);
  }
}
