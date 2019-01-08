import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  animations: [
    trigger('headerAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-0.5em)'}),
        animate('2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('backAnimations', [
      transition(':enter', [
        style({ transform: 'translateX(4em)'}),
        animate('0.75s ease', style({ transform: 'translateX(0)' })),
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
        animate('2s 1s ease', style({ opacity: 1, transform: 'rotateY(360deg)' })),
      ]),
    ])
  ]
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
