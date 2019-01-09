import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGreeting(name: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/greeting?name=' + name);
  }

  getArtistById(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/artist?id=' + id);
  }

  getSongById(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/song?id=' + id);
  }
}
