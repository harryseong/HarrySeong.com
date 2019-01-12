import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navpage-secret',
  templateUrl: './navpage-secret.component.html',
  styleUrls: ['./navpage-secret.component.css'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-1em)' }),
        animate('2s ease', style({ opacity: 1, transform: 'translateY(0)'}))
      ])
    ])
  ]
})
export class NavpageSecretComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
