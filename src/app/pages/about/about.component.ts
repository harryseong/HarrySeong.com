import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
export class AboutComponent implements OnInit {
  transition = '';

  constructor() { }

  ngOnInit() {
    this.transition = 'fadeInDrop';
  }

}
