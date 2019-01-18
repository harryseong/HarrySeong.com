import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenWeatherMapApiService} from '../../../shared/services/api/open-weather-map/open-weather-map-api.service';
import {Subscription, timer} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0)'}),
        animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class WeatherComponent implements OnInit, OnDestroy {
  weatherRsp: any;
  weatherSubscription$: Subscription;

  constructor(private weatherService: OpenWeatherMapApiService) { }

  ngOnInit() {
    this.weatherSubscription$ = timer(0, environment.openWeatherMap.apiCallFrequency).subscribe(
      () => {
        this.weatherService.getCurrentWeather(environment.openWeatherMap.zipcode).subscribe(
          rsp => {
            this.weatherRsp = rsp;
            console.info('Updated weather info with api call.');
          },
          error1 => console.error('There was an error reaching the Open Weather Map api endpoint.')
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.weatherSubscription$.unsubscribe();
  }
}
