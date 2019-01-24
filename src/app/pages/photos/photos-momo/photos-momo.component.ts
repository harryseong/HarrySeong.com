import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photos-momo',
  templateUrl: './photos-momo.component.html',
  styleUrls: ['./photos-momo.component.css'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PhotosMomoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
