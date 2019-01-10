import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGreeting(name: string): Observable<any> {
    return this.http.get<any>(environment.backendApiUrl + 'greeting?name=' + name);
  }

  getArtistById(id: number): Observable<any> {
    return this.http.get<any>(environment.backendApiUrl + 'artist?id=' + id);
  }

  getSongById(id: number): Observable<any> {
    return this.http.get<any>(environment.backendApiUrl + 'song?id=' + id);
  }
}
