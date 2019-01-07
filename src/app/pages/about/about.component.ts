import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('headerAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-0.5em)'}),
        animate('2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('backAnimations', [
      transition(':enter', [
        style({ transform: 'translateX(4em)'}),
        animate('0.75s ease', style({ transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1.5s .5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('educationAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1.5s .75s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('experienceAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1.5s 1s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('techAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1.5s 1.25s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('websiteAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1.5s 1.5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class AboutComponent implements OnInit {
  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit() {}

}
