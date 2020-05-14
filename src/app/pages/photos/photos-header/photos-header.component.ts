import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photos-header',
  templateUrl: './photos-header.component.html',
  styleUrls: ['./photos-header.component.scss'],
  animations: [
    trigger('blurbAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0)'}),
        animate('1s 2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PhotosHeaderComponent implements OnInit {
  @Input() headerTitle: string;
  @Input() headerSubtitle: string;
  @Input() headerBlurb: string;

  constructor() { }

  ngOnInit() {
  }

}
