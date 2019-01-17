import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-experimental',
  templateUrl: './experimental.component.html',
  styleUrls: ['./experimental.component.css'],
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
  pageHeader = 'experimental';
  pageSubheader = 'you called for a test subject?...';
  pageExplanation = 'TBD';
  pageTech = 'TBD';

  constructor() { }

  ngOnInit() {}
}
