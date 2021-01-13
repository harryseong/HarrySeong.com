import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  constructor(private http: HttpClient) { }

  getCurrentlyPlaying(): Observable<any> {
    const headers = new HttpHeaders({'x-api-key': environment.spotify.apiKey});
    return this.http.get<any>(environment.spotify.apiUrl, {headers: headers});
  }
}
