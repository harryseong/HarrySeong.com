import {Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {OpenWeatherMapApiService} from '../../../shared/services/api/open-weather-map/open-weather-map-api.service';
import {Subscription, timer} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {animate, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment-timezone';
import {MatSnackBar} from '@angular/material';

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
      zip: new FormControl('', [Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
  });
  @ViewChild('zip') zipField: ElementRef;

  currentZip: string;
  weatherRsp: any;
  weather$: Subscription;
  weatherUnitC = false;
  weatherIcon: string;

  constructor(private weatherService: OpenWeatherMapApiService, private snackBar: MatSnackBar, private zone: NgZone) { }

  ngOnInit() {
    this.lookupHarrysWeather();
  }

  ngOnDestroy(): void {
    if (this.weather$ !== null) {
      this.weather$.unsubscribe();
      console.log('Unsubscribed from weather$.');
    }
  }

  lookupCurrentWeather() {
    if (this.weatherForm.valid && this.weatherForm.get('zip').value.length === 5) {
      this.currentZip = this.weatherForm.get('zip').value;
      this.getCurrentWeather(this.currentZip);
      this.weatherForm.get('zip').reset('');
      this.zipField.nativeElement.blur();
    }
  }

  lookupHarrysWeather() {
    this.currentZip = environment.openWeatherMap.harryZipcode;
    this.getCurrentWeather(this.currentZip);
  }

  getCurrentWeather(zip: string) {
    if (this.weather$ !== null && this.weather$ !== undefined) {
      this.weather$.unsubscribe();
    }
    this.weather$ = timer(0, environment.openWeatherMap.apiCallFrequency).subscribe(
      () => {
        this.weatherService.getCurrentWeather(zip, this.weatherUnitC ? 'metric' : 'imperial').subscribe(
          rsp => {
            this.weatherRsp = rsp;

            // Determine if daytime or nighttime.
            const sunrise = moment.unix(rsp.sys.sunrise);
            const sunset = moment.unix(rsp.sys.sunset);
            const currentTime = moment();
            const isDaytime = moment(currentTime).isBetween(sunrise, sunset, null, '[)');
            console.log('Sunrise: ' + sunrise);
            console.log('Sunset: ' + sunset);
            console.log('Current: ' + moment(currentTime));
            console.log('Daytime: ' + isDaytime);

            // Select corresponding weather icon to display.
            const weatherId = rsp.weather[0].id;
            this.weatherIcon = 'wi-' + this.weatherService.weatherIdIconMap[weatherId][isDaytime ? 'day' : 'night'];
            console.log('Weather ID: ' + weatherId);
            console.log('Weather icon: ' + this.weatherIcon);

            console.log('Updated weather info with api call.');
          },
          error1 => {
            switch (error1.statusText) {
              case 'Not Found': {
                this.openSnackBar('City not found. ', 'OK', 4000);
                break;
              }
              default: {
                this.openSnackBar('The weather api is currently unreachable. ', 'OK', 4000);
                break;
              }
            }
            console.error(JSON.stringify(error1));
          }
        );
      }
    );
  }

  changeUnit() {
    this.getCurrentWeather(this.currentZip);
  }

  round(x: number): number {
    return Math.round(x);
  }

  formatToCST_hmma(timestamp: number): string {
    return moment.unix(timestamp).tz('America/Chicago').format('h:mma');
  }

  // Function for opening snackbar.
  openSnackBar(message: string, action: string, duration?: number) {
    this.zone.run(() => {
      this.snackBar.open(message, action, {
        duration: duration,
        verticalPosition: 'top'
      });
    });
  }
}
