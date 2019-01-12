import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.css'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-1em)' }),
        animate('2s ease', style({ opacity: 1, transform: 'translateY(0)'}))
      ])
    ])
  ]
})
export class NavpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
