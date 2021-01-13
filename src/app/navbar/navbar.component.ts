import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        style({transform: 'translateY(-3em)'}),
        animate('.75s ease'),
      ]),
    ])
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
