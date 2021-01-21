import {Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {OpenWeatherMapService} from '../../shared/services/open-weather-map/open-weather-map.service';
import {Subscription, timer} from 'rxjs';
import {environment} from '../../../environments/environment';
import {animate, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment-timezone';
import { MatSnackBar } from '@angular/material/snack-bar';
import {AwsApiService} from '../../shared/services/api/aws/aws-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0)'}),
        animate('1s 1s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class WeatherComponent implements OnInit, OnDestroy {
  pageHeader = 'weather';
  pageSubheader = 'raindrops keep fallin\' on my head...';
  pageExplanation = 'On January 18th, 2019, the Chicagoland area was forecasted to receive 5-10 inches of snow from an impending blizzard. ' +
    'As a result, we were sent home early from work so that we could avoid the storm. However, it did not snow until nightfall, and even so, we ' +
    'did not receive much snow at all. I was inspired to make this weather page because of the aforementioned faux-blizzard.';
  pageTech = 'This page makes use of the Open Weather Map api. The weather icons are displayed according to the weather id number ' +
    'received from the api and also according to the time of day; if the current time is between "sunrise" and "sunrise," the daytime ' +
    'weather icons are displayed. Otherwise, the nighttime weather icons are displayed';
  weatherForm = new FormGroup({
      zip: new FormControl('', [Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
  });
  @ViewChild('zip', {static: true}) zipField: ElementRef;

  currentZip = '60201';
  weatherRsp: any;
  weather$: Subscription;
  weatherUnitC = false;
  weatherUnit = 'F';
  weatherIcon: string;

  constructor(private awsApiService: AwsApiService, private weatherService: OpenWeatherMapService, private snackBar: MatSnackBar, private zone: NgZone) { }

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
      this.getCurrentWeather(this.weatherForm.get('zip').value);
    }
  }

  lookupHarrysWeather() {
    this.getCurrentWeather(environment.aws.api.weather.harryZipcode);
  }

  getCurrentWeather(zip: string) {
    if (this.weather$ !== null && this.weather$ !== undefined) {
      this.weather$.unsubscribe();
    }
    this.weather$ = timer(0, environment.aws.api.weather.apiCallFrequency).subscribe(
      () => {
        this.awsApiService.getCurrentWeather(zip, this.weatherUnitC ? 'metric' : 'imperial').subscribe(
          rsp => {
            this.weatherRsp = rsp;
            this.weatherUnit = this.weatherUnitC ? 'C' : 'F';

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
            this.currentZip = zip;
            this.resetWeatherForm();
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
            this.resetWeatherForm();
          }
        );
      }
    );
  }

  resetWeatherForm() {
    this.weatherForm.get('zip').reset('');
    this.zipField.nativeElement.blur();
  }

  changeUnit() {
    this.getCurrentWeather(this.currentZip);
  }

  round(x: number): number {
    return Math.round(x);
  }

  formatToCST_hmma(timestamp: number): string {
    return moment.unix(timestamp).tz('America/Chicago').format('h:mm A');
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
