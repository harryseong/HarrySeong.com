import { Component, OnInit } from '@angular/core';
import {animate, query, sequence, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.scss'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        query('.nav-btn-div', [
          style({ opacity: 0, transform: 'translateY(2em)'}),
          stagger(100, [
            sequence([
              animate('800ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
            ])
          ])
        ], {optional: true})
      ]),
    ])
  ]
})
export class NavpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
