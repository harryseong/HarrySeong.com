import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photos-singapore',
  templateUrl: './photos-singapore.component.html',
  styleUrls: ['./photos-singapore.component.css'],
  animations: [
  trigger('contentAnimations', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(0.5em)'}),
      animate('1s ease', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
  ])
]
})
export class PhotosSingaporeComponent implements OnInit {
  headerTitle = 'Singapore';
  headerSubtitle = 'The Lion City';
  headerBlurb = 'The Republic of Singapore is a city-state island nation situated at the southern tip of the Malay Peninsula. The nation ' +
    'is home to 5.6 million residents; a reflection of Singapore\'s ethnic diversity, its four official languages are English, Malay, ' +
    'Mandarin, and Tamil.';
  images: any[] = [
    {src: 'assets/images/photos/singapore/durian.jpg', w: 1067, h: 800, title: 'During fallen on a path.', author: 'HS'},
    {src: 'assets/images/photos/singapore/durian-building.jpg', w: 1422, h: 800, title: 'Building resembling durian.', author: 'HS'},
    {src: 'assets/images/photos/singapore/hawker.jpg', w: 1422, h: 800, title: 'Hawker center food.', author: 'HS'},
    {src: 'assets/images/photos/singapore/hawker-2.jpg', w: 1422, h: 800, title: 'Hawker center food.', author: 'HS'},
    {src: 'assets/images/photos/singapore/hawker-3.jpg', w: 1422, h: 800, title: 'Hawker center food.', author: 'HS'},
    {src: 'assets/images/photos/singapore/kim-trump.jpg', w: 600, h: 800, title: 'Kim and Trump on the front page.', author: 'HS'},
    {src: 'assets/images/photos/singapore/lilies.jpg', w: 1067, h: 800, title: 'Water lilies and the skyline.', author: 'HS'},
    {src: 'assets/images/photos/singapore/mangoes.jpg', w: 600, h: 800, title: 'Huge mangoes.', author: 'HS'},
    {src: 'assets/images/photos/singapore/dragon-fruit.jpg', w: 1067, h: 800, title: 'Red dragon fruit.', author: 'HS'},
    {src: 'assets/images/photos/singapore/skyline.jpg', w: 1422, h: 800, title: 'Singapore skyline.', author: 'HS'},
    {src: 'assets/images/photos/singapore/surfboard.jpg', w: 1422, h: 800, title: 'Should look familiar...', author: 'HS'},
    {src: 'assets/images/photos/singapore/surfboard-2.jpg', w: 1422, h: 800, title: 'Should look familiar...', author: 'HS'},
    {src: 'assets/images/photos/singapore/merlion.jpg', w: 1422, h: 800, title: 'The merlion', author: 'HS'},
    {src: 'assets/images/photos/singapore/merlion-2.jpg', w: 1422, h: 800, title: 'The merlion', author: 'HS'},
    {src: 'assets/images/photos/singapore/monitor-lizard.jpg', w: 1422, h: 800, title: 'A monitor lizard near the mangroves.', author: 'HS'},
    {src: 'assets/images/photos/singapore/shrimping-2.jpg', w: 1067, h: 800, title: 'Shrimping.', author: 'HS'},
    {src: 'assets/images/photos/singapore/shrimping.jpg', w: 1067, h: 800, title: 'Shrimping.', author: 'HS'},
    {src: 'assets/images/photos/singapore/temple.jpg', w: 450, h: 800, title: 'Temple.', author: 'HS'},
    {src: 'assets/images/photos/singapore/temple-cat.jpg', w: 1422, h: 800, title: 'Temple cat enjoying a head scratch.', author: 'HS'},
    {src: 'assets/images/photos/singapore/temple-hindu.jpg', w: 450, h: 800, title: 'Temple.', author: 'HS'},
    {src: 'assets/images/photos/singapore/gardens.jpg', w: 1422, h: 800, title: 'Gardens by the Bay.', author: 'HS'},
    {src: 'assets/images/photos/singapore/gardens-2.jpg', w: 450, h: 800, title: 'Gardens by the Bay.', author: 'HS'},
    {src: 'assets/images/photos/singapore/gardens-3.jpg', w: 450, h: 800, title: 'Gardens by the Bay.', author: 'HS'},
    {src: 'assets/images/photos/singapore/gardens-4.jpg', w: 450, h: 800, title: 'Gardens by the Bay.', author: 'HS'},
    {src: 'assets/images/photos/singapore/mall.jpg', w: 1067, h: 800, title: 'Mall.', author: 'HS'},
  ];

  constructor() { }

  ngOnInit() { }
}
