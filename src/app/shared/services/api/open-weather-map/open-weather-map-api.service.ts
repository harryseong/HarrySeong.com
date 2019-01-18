import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapApiService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(zipcode: string): Observable<any> {
    const params = new HttpParams()
      .set('zip', zipcode)
      .set('appid', environment.openWeatherMap.apiKey)
      .set('units', 'imperial');
    return this.http.get<any>(environment.openWeatherMap.apiUrl, {params: params});
  }
}
