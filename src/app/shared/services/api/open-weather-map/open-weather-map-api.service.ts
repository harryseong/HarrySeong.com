import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapApiService {
  weatherIdIconMap = {
    200: {icon: 'thunderstorm', day: 'day-thunderstorm', night: 'night-alt-thunderstorm'},
    201: {icon: 'thunderstorm', day: 'day-thunderstorm', night: 'night-alt-thunderstorm'},
    202: {icon: 'thunderstorm', day: 'day-thunderstorm', night: 'night-alt-thunderstorm'},
    210: {icon: 'lightning', day: 'day-lightning', night: 'night-alt-lightning'},
    211: {icon: 'lightning', day: 'day-lightning', night: 'night-alt-lightning'},
    212: {icon: 'lightning', day: 'day-lightning', night: 'night-alt-lightning'},
    221: {icon: 'lightning', day: 'day-lightning', night: 'night-alt-lightning'},
    230: {icon: 'thunderstorm', day: 'day-thunderstorm', night: 'night-alt-thunderstorm'},
    231: {icon: 'thunderstorm', day: 'day-thunderstorm', night: 'night-alt-thunderstorm'},
    232: {icon: 'thunderstorm', day: 'day-thunderstorm', night: 'night-alt-thunderstorm'},
    300: {icon: 'sprinkle', day: 'day-sprinkle', night: 'night-alt-sprinkle'},
    301: {icon: 'sprinkle', day: 'day-sprinkle', night: 'night-alt-sprinkle'},
    302: {icon: 'rain', day: 'day-rain', night: 'night-alt-rain'},
    310: {icon: 'rain-mix', day: 'day-rain-mix', night: 'night-alt-rain-mix'},
    311: {icon: 'rain', day: 'day-rain', night: 'night-alt-rain'},
    312: {icon: 'rain', day: 'day-rain', night: 'night-alt-rain'},
    313: {icon: 'showers', day: 'day-showers', night: 'night-alt-showers'},
    314: {icon: 'rain', day: 'day-rain', night: 'night-alt-rain'},
    321: {icon: 'sprinkle', day: 'day-sprinkle', night: 'night-alt-sprinkle'},
    500: {icon: 'sprinkle', day: 'day-sprinkle', night: 'night-alt-sprinkle'},
    501: {icon: 'rain', day: 'day-rain', night: 'night-alt-rain'},
    502: {icon: 'rain', day: 'day-rain', night: 'night-alt-rain'},
    503: {icon: 'rain', day: 'day-rain', night: 'night-alt-rain'},
    504: {icon: 'rain', day: 'day-rain', night: 'night-alt-rain'},
    511: {icon: 'rain-mix', day: 'day-rain-mix', night: 'night-alt-rain-mix'},
    520: {icon: 'showers', day: 'day-showers', night: 'night-alt-showers'},
    521: {icon: 'showers', day: 'day-showers', night: 'night-alt-showers'},
    522: {icon: 'showers', day: 'day-showers', night: 'night-alt-showers'},
    531: {icon: 'storm-showers', day: 'day-storm-showers'},
    600: {icon: 'snow', day: 'day-snow', night: 'night-alt-snow'},
    601: {icon: 'snow', day: 'day-snow', night: 'night-alt-snow'},
    602: {icon: 'sleet', day: 'day-sleet', night: 'night-alt-sleet'},
    611: {icon: 'rain-mix', day: 'day-rain-mix', night: 'night-alt-rain-mix'},
    612: {icon: 'rain-mix', day: 'day-rain-mix', night: 'night-alt-rain-mix'},
    615: {icon: 'rain-mix', day: 'day-rain-mix', night: 'night-alt-rain-mix'},
    616: {icon: 'rain-mix', day: 'day-rain-mix', night: 'night-alt-rain-mix'},
    620: {icon: 'rain-mix', day: 'day-rain-mix', night: 'night-alt-rain-mix'},
    621: {icon: 'snow', day: 'day-snow', night: 'night-alt-snow'},
    622: {icon: 'snow', day: 'day-snow', night: 'night-alt-snow'},
    701: {icon: 'fog', day: 'day-fog', night: 'night-fog'},
    711: {icon: 'smoke', day: 'smoke', night: 'smoke'},
    721: {icon: 'day-haze', day: 'day-haze', night: 'day-haze'},
    731: {icon: 'dust', day: 'dust', night: 'dust'},
    741: {icon: 'fog', day: 'day-fog', night: 'night-fog'},
    751: {icon: 'sandstorm', day: 'sandstorm', night: 'sandstorm'},
    761: {icon: 'dust', day: 'dust', night: 'dust'},
    762: {icon: 'dust', day: 'dust', night: 'dust'},
    771: {icon: 'cloudy-gusts', day: 'day-cloudy-gusts', night: 'night-cloudy-gusts'},
    781: {icon: 'tornado', day: 'tornado', night: 'tornado'},
    800: {icon: 'day-sunny', day: 'day-sunny', night: 'night-clear'},
    801: {icon: 'cloudy-gusts', day: 'day-cloudy-gusts', night: 'night-alt-cloudy-gusts'},
    802: {icon: 'cloudy-gusts', day: 'day-cloudy-gusts', night: 'night-alt-cloudy-gusts'},
    803: {icon: 'cloudy-gusts', day: 'day-cloudy-gusts', night: 'night-alt-cloudy-gusts'},
    804: {icon: 'cloudy', day: 'day-sunny-overcast', night: 'night-alt-cloudy'},
    900: {icon: 'tornado', day: 'tornado', night: 'tornado'},
    901: {icon: 'storm-showers', day: 'day-storm-showers', night: 'night-alt-storm-showers'},
    902: {icon: 'hurricane', day: 'hurricane', night: 'hurricane'},
    903: {icon: 'snowflake-cold', day: 'snowflake-cold', night: 'snowflake-cold'},
    904: {icon: 'hot', day: 'hot', night: 'hot'},
    905: {icon: 'windy', day: 'windy', night: 'windy'},
    906: {icon: 'hail', day: 'day-hail', night: 'night-alt-hail'},
    957: {icon: 'strong-wind', day: 'strong-wind', night: 'string-wind'},
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
