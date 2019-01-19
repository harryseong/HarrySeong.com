import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapApiService {
  weatherIconDict = {
    1: 'chanceflurries',
    2: 'chancerain',
    3: 'chancesleet',
    4: 'chancesnow',
    5: 'chancestorms',
    6: 'clear',
    7: 'cloudy',
    8: 'flurries',
    9: 'fog',
    10: 'hazy',
    11: 'mostlycloudy',
    12: 'mostlysunny',
    13: 'partlycloudy',
    14: 'partylysunny',
    15: 'rain',
    16: 'sleet',
    17: 'snow',
    18: 'sunny',
    19: 'tstorms',
    20: 'unknown'
  };
  weatherIdDict = {
    200: {iconKey: 19},
    201: {iconKey: 19},
    202: {iconKey: 19},
    210: {iconKey: 19},
    211: {iconKey: 19},
    212: {iconKey: 19},
    221: {iconKey: 19},
    230: {iconKey: 19},
    231: {iconKey: 19},
    232: {iconKey: 19},
    300: {iconKey: 2},
    301: {iconKey: 2},
    302: {iconKey: 2},
    310: {iconKey: 2},
    311: {iconKey: 2},
    312: {iconKey: 2},
    313: {iconKey: 2},
    314: {iconKey: 2},
    321: {iconKey: 2},
    500: {iconKey: 2},
    501: {iconKey: 15},
    502: {iconKey: 15},
    503: {iconKey: 15},
    504: {iconKey: 15},
    511: {iconKey: 16},
    520: {iconKey: 15},
    521: {iconKey: 15},
    522: {iconKey: 15},
    531: {iconKey: 15},
    600: {iconKey: 8},
    601: {iconKey: 17},
    602: {iconKey: 17},
    611: {iconKey: 16},
    612: {iconKey: 16},
    615: {iconKey: 8},
    616: {iconKey: 17},
    620: {iconKey: 8},
    621: {iconKey: 17},
    622: {iconKey: 17},
    701: {iconKey: 9},
    711: {iconKey: 10},
    721: {iconKey: 10},
    731: {iconKey: 10},
    741: {iconKey: 9},
    751: {iconKey: 20},
    761: {iconKey: 20},
    762: {iconKey: 20},
    771: {iconKey: 20},
    781: {iconKey: 20},
    800: {iconKey: 6},
    801: {iconKey: 13},
    802: {iconKey: 13},
    803: {iconKey: 7},
    804: {iconKey: 7},
  };

  constructor(private http: HttpClient) { }

  getCurrentWeather(zipcode: string): Observable<any> {
    const params = new HttpParams()
      .set('zip', zipcode)
      .set('appid', environment.openWeatherMap.apiKey)
      .set('units', 'imperial');
    return this.http.get<any>(environment.openWeatherMap.apiUrl, {params: params});
  }
}
