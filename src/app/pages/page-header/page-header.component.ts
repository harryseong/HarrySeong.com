import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
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
    ])
  ]
})
export class PageHeaderComponent implements OnInit {

  @Input() pageHeader: string;
  @Input() pageSubheader: string;

  constructor() { }

  ngOnInit() {
  }

}
