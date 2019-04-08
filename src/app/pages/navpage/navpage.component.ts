import { Component, OnInit } from '@angular/core';
import {animate, query, sequence, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.css'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        query('.nav-btn-div', [
          style({ opacity: 0, transform: 'translateY(2em)'}),
          stagger(120, [
            sequence([
              animate('1s ease', style({ opacity: 1, transform: 'translateY(0)' })),
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
