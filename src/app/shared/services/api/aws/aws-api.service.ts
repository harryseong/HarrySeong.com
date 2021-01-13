import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsApiService {

  constructor(private http: HttpClient) { }

  getCurrentlyPlayingSong(): Observable<any> {
    const headers = new HttpHeaders({'x-api-key': environment.aws.music.spotify.apiKey});
    return this.http.get<any>(environment.aws.music.spotify.apiUrl, {headers: headers});
  }

  getAllPlaces(): Observable<any> {
    const headers = new HttpHeaders({'x-api-key': environment.aws.places.apiKey});
    return this.http.get<any>(environment.aws.places.apiUrl, {headers: headers});
  }
}
