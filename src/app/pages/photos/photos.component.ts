import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1.5s .5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PhotosComponent implements OnInit {
  pageHeader = 'photos';
  pageSubheader = 'moments captured in rectangular forms...';
  pageExplanation = 'TBD';
  pageTech = 'TBD';

  constructor() { }

  ngOnInit() {}
}
