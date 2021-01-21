import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsApiService {

  constructor(private http: HttpClient) { }

  getSpotifyCurrentlyPlaying(): Observable<any> {
    const headers = new HttpHeaders({'x-api-key': environment.aws.apiKey});
    return this.http.get<any>(environment.aws.api.music.spotify.apiUrl, {headers});
  }

  getAllPlaces(): Observable<any> {
    const headers = new HttpHeaders({'x-api-key': environment.aws.apiKey});
    return this.http.get<any>(environment.aws.api.places.apiUrl, {headers});
  }

  getCurrentWeather(zipcode: string, unit: string): Observable<any> {
    const headers = new HttpHeaders({'x-api-key': environment.aws.apiKey});
    const params = new HttpParams().set('units', unit).set('zip', zipcode);
    return this.http.get<any>(environment.aws.api.weather.apiUrl, {params, headers});
  }
}
