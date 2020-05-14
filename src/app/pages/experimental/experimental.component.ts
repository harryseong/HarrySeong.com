import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-experimental',
  templateUrl: './experimental.component.html',
  styleUrls: ['./experimental.component.scss'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0)'}),
        animate('0.5s 0.75s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class ExperimentalComponent implements OnInit {
  pageHeader = 'lab';
  pageSubheader = 'you called for a test subject?';
  pageExplanation = 'This page was created with the purpose of being a digital test site for all kinds of experimentation whether that ' +
    'be playing around with a new library or api.';
  pageTech = 'We shall see what neat things get developed and implemented here.';

  constructor() { }

  ngOnInit() { }
}
