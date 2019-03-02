import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
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
  pageHeader = 'about';
  pageSubheader = 'who, what, when, where, how...';
  pageExplanation = 'This is a summary view of my resume with some key experiences. It also serves as motivation for me to keep learning ' +
    'and trying new things. Whenever I stop to think about how far I\'ve come in the past "x" months or years, I am filled with ' +
    'gratitude for the individuals who believed in me, invested in me, and helped me along the way to get to where I am today. My hope ' +
    'is that I will have many opportunities throughout my life to pay it forward.';
  pageTech = 'Not much special on this page in terms of implementation.';
  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit() {}

}
