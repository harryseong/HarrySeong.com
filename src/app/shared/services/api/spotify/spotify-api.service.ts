import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  constructor(private http: HttpClient) { }

  refreshAccessToken(): Observable<any> {
    return this.http.get<any>(environment.backend.apiUrl + 'refresh_access_token');
  }

  getCurrentlyPlaying(accessToken: string): Observable<any> {
    const params = new HttpParams().set('access_token', accessToken);
    return this.http.get<any>(environment.backend.apiUrl + 'currently_playing', {params: params});
  }
}
