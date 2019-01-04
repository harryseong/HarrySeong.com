import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  animations: [
    trigger('transitionAnimations', [
      state('fadeInDrop', style({ opacity: 1, transform: 'translateY(0.3em)',
      })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease', style({ opacity: 1, transform: 'translateY(0.3em)'})),
        style({ opacity: 1 }),
      ]),
    ])
  ],
})
export class PlacesComponent implements OnInit {
  transition = '';

  constructor() { }

  ngOnInit() {
    this.transition = 'fadeInDrop';
  }

}
