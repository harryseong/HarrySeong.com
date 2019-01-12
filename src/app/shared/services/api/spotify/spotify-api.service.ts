import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  constructor(private http: HttpClient) { }

  authorize(): Observable<any> {
    const headers = new HttpHeaders()
      .set('client_id', environment.spotify.clientId)
      .set('response_type', 'code')
      .set('redirect_uri', environment.spotify.redirectUri)
      .set('state', environment.spotify.oAuthState)
      .set('scope', 'user-read-currently-playing')
      .set('show-dialog', 'false');
    return this.http.get<any>('https://accounts.spotify.com/authorize', {headers: headers});
  }

  getCurrentlyPlayingTrack(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + environment.spotify.oAuthToken);
    return this.http.get<any>('https://api.spotify.com/v1/me/player/currently-playing', {headers: headers});
  }
}
