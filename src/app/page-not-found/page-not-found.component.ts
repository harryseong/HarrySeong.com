import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  animations: [
    trigger('transitionAnimations', [
      state('fadeInDrop', style({ opacity: 1, transform: 'translateY(0.3em)',
      })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease', style({ opacity: 1, transform: 'translateY(0.3em)'})),
        style({ opacity: 1 }),
      ]),
    ])
  ],
})
export class PageNotFoundComponent implements OnInit {
  transition = '';

  constructor() { }

  ngOnInit() {
    this.transition = 'fadeInDrop';
  }

}
