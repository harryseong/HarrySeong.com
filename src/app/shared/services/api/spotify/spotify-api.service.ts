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
    return this.http.get<any>(environment.backend.spotifyApiUrl + 'currently_playing');
  }
}
