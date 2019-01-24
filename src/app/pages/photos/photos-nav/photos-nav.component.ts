import { Component, OnInit } from '@angular/core';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-photos-nav',
  templateUrl: './photos-nav.component.html',
  styleUrls: ['./photos-nav.component.css'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1s .5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('divAnimations', [
      transition(':enter', [
        query('.color-div', [
          style({ opacity: 0, transform: 'translateY(8em) rotateY(90deg)'}),
          stagger(300, [
            animate('0.7s 1s ease', style({ opacity: 1, transform: 'translateY(0) rotateY(0deg)' })),
            animate('1s ease', style({ opacity: 0.75 })),
          ]),
        ])
      ]),
    ]),
    trigger('colorDivAnimations', [
      transition('* => hide', [
        animate('0.7s ease', style({ opacity: 0, transform: 'translateY(8em) rotateY(90deg)' })),
      ]),
      transition('* => hideLast', [
        animate('0.7s 0.3s ease', style({ opacity: 0, transform: 'translateY(8em) rotateY(90deg)' })),
      ]),
      state('hide, hideLast', style({ opacity: 0, transform: 'translateY(8em) rotateY(90deg)' })),
    ])
  ]
})
export class PhotosNavComponent implements OnInit {
  divAState = '';
  divBState = '';
  divCState = '';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  viewA() {
    this.divAState = 'hideLast';
    this.divBState = 'hide';
    this.divCState = 'hide';
    setTimeout(() => this.router.navigate(['/photos/farm']), 1000);
  }

  viewB() {
    this.divAState = 'hide';
    this.divBState = 'hideLast';
    this.divCState = 'hide';
    setTimeout(() => this.router.navigate(['/photos/momo']), 1000);
  }

  viewC() {
    this.divAState = 'hide';
    this.divBState = 'hide';
    this.divCState = 'hideLast';
    setTimeout(() => this.router.navigate(['/photos/farm']), 1000);
  }
}
