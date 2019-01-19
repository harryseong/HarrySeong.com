import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenWeatherMapApiService} from '../../../shared/services/api/open-weather-map/open-weather-map-api.service';
import {Subscription, timer} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {animate, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment-timezone';

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
  weatherForm = new FormGroup({
      zip: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
  });
  weatherRsp: any;
  weather$: Subscription;
  weatherUnit = 'imperial';
  weatherIcon: string;



  constructor(private weatherService: OpenWeatherMapApiService) { }

  ngOnInit() {
    this.getCurrentWeather();
  }

  ngOnDestroy(): void {
    if (this.weather$ !== null) {
      this.weather$.unsubscribe();
      console.log('Unsubscribed from weather$.');
    }
  }

  getCurrentWeather() {
    this.weather$ = timer(0, environment.openWeatherMap.apiCallFrequency).subscribe(
      () => {
        this.weatherService.getCurrentWeather('60201').subscribe(
          rsp => {
            this.weatherRsp = rsp;

            const sunrise = moment.unix(rsp.sys.sunrise);
            const sunset = moment.unix(rsp.sys.sunset);
            const currentTime = moment();
            const isDaytime = moment(currentTime).isBetween(sunrise, sunset, null, '[)');
            console.log('Sunrise: ' + sunrise);
            console.log('Sunset: ' + sunset);
            console.log('Current: ' + moment(currentTime));
            console.log('Daytime: ' + isDaytime);

            const weatherId = rsp.weather[0].id;
            console.log('Weather ID: ' + weatherId);
            this.weatherIcon = 'wi-' + this.weatherService.weatherIdIconMap[weatherId][isDaytime ? 'day' : 'night'];
            console.log('Weather icon: ' + this.weatherIcon);
            console.log('Updated weather info with api call.');
          },
          error1 => console.error('There was an error with the Open Weather Map api call.')
        );
      }
    );
  }

  round(x: number): number {
    return Math.round(x);
  }

  formatToCST_hmma(timestamp: number): string {
    return moment.unix(timestamp).tz('America/Chicago').format('h:mma');
  }
}
