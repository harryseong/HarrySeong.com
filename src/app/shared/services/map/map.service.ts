import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {GeoJson} from './map';
import * as mapboxgl from 'mapbox-gl';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFireDatabase) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }
}
