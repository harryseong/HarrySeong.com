import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  animations: [
    trigger('headerAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-0.5em)'}),
        animate('2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1.5s .5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('progressAnimations', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('4s .5s ease', style({ opacity: 1, transform: 'rotateY(720deg)' })),
      ]),
    ])
  ]
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
