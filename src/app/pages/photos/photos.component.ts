import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1s .5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('divAAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-8em)'}),
        animate('1s .6s ease', style({ opacity: 1, transform: 'translateY(0)' })),
        animate('1s ease', style({ opacity: 0.75 })),
      ]),
    ]),
    trigger('divBAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-8em)'}),
        animate('1s .9s ease', style({ opacity: 1, transform: 'translateY(0)' })),
        animate('1s ease', style({ opacity: 0.75 })),
      ]),
    ]),
    trigger('divCAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-8em)'}),
        animate('1s 1.2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
        animate('1s ease', style({ opacity: 0.75 })),
      ]),
    ])
  ]
})
export class PhotosComponent implements OnInit {
  pageHeader = 'photos';
  pageSubheader = 'moments captured in rectangular forms...';
  pageExplanation = 'As I go about my days, I like to take pictures of quirky and amusing things that made me smile or think, things ' +
    'that evoked a sense of mirth or intrigue. It\'s a good thing we have cameras on our phones these days, because I sure don\'t have ' +
    'a photographic memory, and there are so many moments and scenes to which words just don\'t do much justice!';
  pageTech = 'TBD';

  constructor() { }

  ngOnInit() {}
}
