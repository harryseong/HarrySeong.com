import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  constructor(private http: HttpClient) { }

  getCurrentlyPlaying(): Observable<any> {
    return this.http.get<any>('http://localhost:8888/currently_playing');
  }
}
