import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-scratch-space',
  templateUrl: './scratch-space.component.html',
  styleUrls: ['./scratch-space.component.css']
})
export class ScratchSpaceComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getGreeting('Harry').subscribe(rsp => alert(JSON.stringify(rsp)));
  }

  getGreeting(name: string): Observable<any> {
    const params = new HttpParams().set('name', name);
    return this.http.get<any>(environment.backendApiUrl + 'greeting', {params: params});
  }
}
