import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  animations: [
    trigger('headerAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-0.5em)'}),
        animate('2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PageNotFoundComponent implements OnInit {
  constructor() { }

  ngOnInit() {}
}
