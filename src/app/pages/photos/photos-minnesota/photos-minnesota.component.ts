import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photos-minnesota',
  templateUrl: './photos-minnesota.component.html',
  styleUrls: ['./photos-minnesota.component.css'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PhotosMinnesotaComponent implements OnInit {
  headerTitle = 'Minnesota';
  headerSubtitle = 'Land of 10,000 Lakes';
  images: any[] = [
    {src: 'assets/images/photos/minnesota/momo.jpg', w: 1200, h: 800, title: '@Farm: Momo', author: 'HS'},
    {src: 'assets/images/photos/minnesota/turkey-feather.jpg', w: 1200, h: 800, title: '@Farm: Wild turkey feather planted on the ground.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/tiny-mushroom.jpg', w: 1200, h: 800, title: '@Farm: Tiny mushroom growing on a mossy log.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/spider.jpg', w: 1200, h: 800, title: '@Farm: A spider made a home in the woods.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/picnic.jpg', w: 1200, h: 800, title: '@Farm: Picnic table in the woods.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/mom-flower.jpg', w: 1200, h: 800, title: '@Farm: Yellow flower planted by mom.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/cats-hammock.jpg', w: 1200, h: 800, title: '@Farm: Momo and Coco on hammock with dad.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/momo-2.jpg', w: 1200, h: 800, title: '@Farm: Momo', author: 'HS'},
    {src: 'assets/images/photos/minnesota/momo-3.jpg', w: 1200, h: 800, title: '@Farm: Momo', author: 'HS'},
    {src: 'assets/images/photos/minnesota/momo-4.jpg', w: 1200, h: 800, title: '@Farm: Momo', author: 'HS'},
    {src: 'assets/images/photos/minnesota/coco.jpg', w: 1067, h: 800, title: '@Farm: Coco', author: 'HS'},
    {src: 'assets/images/photos/minnesota/coco-2.jpg', w: 1067, h: 800, title: '@Farm: Coco', author: 'HS'},
    {src: 'assets/images/photos/minnesota/coco-3.jpg', w: 1200, h: 800, title: '@Farm: Coco and mom.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/cultivation-room.jpg', w: 1200, h: 800, title: '@Farm: Mushroom cultivation room.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/mushroom-temp.jpg', w: 1200, h: 800, title: '@Farm: Temp and humidity of cultivation room.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/oyster-mushroom.jpg', w: 1200, h: 800, title: '@Farm: Oyster mushroom', author: 'HS'},
    {src: 'assets/images/photos/minnesota/oyster-mushroom-2.jpg', w: 533, h: 800, title: '@Farm: Oyster mushroom', author: 'HS'},
    {src: 'assets/images/photos/minnesota/oyster-mushroom-3.jpg', w: 1200, h: 800, title: '@Farm: Oyster mushroom', author: 'HS'},
    {src: 'assets/images/photos/minnesota/oyster-mushroom-4.jpg', w: 1200, h: 800, title: '@Farm: Oyster mushroom', author: 'HS'},
    {src: 'assets/images/photos/minnesota/oyster-mushroom-5.jpg', w: 1200, h: 800, title: '@Farm: Oyster mushroom', author: 'HS'},
    {src: 'assets/images/photos/minnesota/oyster-mushroom-6.jpg', w: 1422, h: 800, title: '@Farm: Oyster mushroom', author: 'HS'},
    {src: 'assets/images/photos/minnesota/shiitake-mushroom.jpg', w: 1422, h: 800, title: '@Farm: Shiitake mushroom', author: 'HS'},
    {src: 'assets/images/photos/minnesota/shiitake-mushroom-2.jpg', w: 1422, h: 800, title: '@Farm: Shiitake mushroom', author: 'HS'},
    {src: 'assets/images/photos/minnesota/mom-garden.jpg', w: 1067, h: 800, title: '@Farm: Vegetable garden', author: 'HS'},
    {src: 'assets/images/photos/minnesota/harvest.jpg', w: 1067, h: 800, title: '@Farm: Vegetable harvest', author: 'HS'},
    {src: 'assets/images/photos/minnesota/harvest-2.jpg', w: 1422, h: 800, title: '@Farm: Vegetable harvest', author: 'HS'},
    {src: 'assets/images/photos/minnesota/fishing.jpg', w: 450, h: 800, title: 'Going to a creek to fish.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/fishing-2.jpg', w: 1067, h: 800, title: 'Fishing at a lake.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/lake.jpg', w: 1422, h: 800, title: 'Two loons swimming on a lake.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/storm.jpg', w: 1422, h: 800, title: 'Impending storm.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/stadium.jpg', w: 1422, h: 800, title: 'Home of my Minnesota Vikings.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/cookies.jpg', w: 600, h: 800, title: '@MN State Fair: Sweet Martha\'s Cookies.', author: 'HS'},
    {src: 'assets/images/photos/minnesota/butter-head.jpg', w: 1067, h: 800, title: '@MN State Fair: Sweet Martha\'s Cookies.', author: 'HS'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
