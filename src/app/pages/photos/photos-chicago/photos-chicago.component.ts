import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photos-chicago',
  templateUrl: './photos-chicago.component.html',
  styleUrls: ['./photos-chicago.component.css'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('1s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class PhotosChicagoComponent implements OnInit {
  headerTitle = 'Chicago';
  headerSubtitle = 'The Windy City';
  images: any[] = [
    {src: 'assets/images/photos/chicago/seagull.jpg', w: 1422, h: 800, title: 'Hungry looking seagull from Northwestern lakefill.', author: 'HS'},
    {src: 'assets/images/photos/chicago/cubs.jpg', w: 1067, h: 800, title: 'Chicago Cubs game at Wrigley Field.', author: 'HS'},
    {src: 'assets/images/photos/chicago/chicago-sky.jpg', w: 1422, h: 800, title: 'Chicago from a flight at sunset.', author: 'HS'},
    {src: 'assets/images/photos/chicago/skyline.jpg', w: 1067, h: 800, title: 'Chicago skyline from the bike path.', author: 'HS'},
    {src: 'assets/images/photos/chicago/skyline-2.jpg', w: 1067, h: 800, title: 'Chicago skyline from the Shedd Aquarium.', author: 'HS'},
    {src: 'assets/images/photos/chicago/skyline-3.jpg', w: 1067, h: 800, title: 'Chicago skyline from the beach.', author: 'HS'},
    {src: 'assets/images/photos/chicago/skyline-night.jpg', w: 1422, h: 800, title: 'Chicago skyline at night from Adler Planetarium.', author: 'HS'},
    {src: 'assets/images/photos/chicago/chicago-river.jpg', w: 1422, h: 800, title: 'Chicago skyline from the Chicago river.', author: 'HS'},
    {src: 'assets/images/photos/chicago/trump-14.jpg', w: 1067, h: 800, title: 'Trump Tower in 2014. The "P" had yet to be installed', author: 'HS'},
    {src: 'assets/images/photos/chicago/trump-14-2.jpg', w: 1067, h: 800, title: 'Trump Tower in 2014. The "P" had yet to be installed', author: 'HS'},
    {src: 'assets/images/photos/chicago/lake.jpg', w: 1067, h: 800, title: 'Lake Michigan from Rogers Park.', author: 'HS'},
    {src: 'assets/images/photos/chicago/lake-2.jpg', w: 1067, h: 800, title: 'Lake Michigan from Rogers Park.', author: 'HS'},
    {src: 'assets/images/photos/chicago/lakefill.jpg', w: 1067, h: 800, title: '@Northwestern University: Lake Michigan lakefill.', author: 'HS'},
    {src: 'assets/images/photos/chicago/lakefill-2.jpg', w: 1067, h: 800, title: '@Northwestern University: Lake Michigan lakefill.', author: 'HS'},
    {src: 'assets/images/photos/chicago/lakefill-3.jpg', w: 1067, h: 800, title: '@Northwestern University: Lake Michigan lakefill.', author: 'HS'},
    {src: 'assets/images/photos/chicago/lakefill-4.jpg', w: 1067, h: 800, title: '@Northwestern University: Lake Michigan lakefill.', author: 'HS'},
    {src: 'assets/images/photos/chicago/library.jpg', w: 1067, h: 800, title: '@Northwestern University: Deering Library.', author: 'HS'},
    {src: 'assets/images/photos/chicago/office.jpg', w: 1067, h: 800, title: '@Northwestern University: My office.', author: 'HS'},
    {src: 'assets/images/photos/chicago/northwestern-arch.jpg', w: 1422, h: 800, title: '@Northwestern University: The NU Arch.', author: 'HS'},
    {src: 'assets/images/photos/chicago/chapel.jpg', w: 1422, h: 800, title: '@Northwestern University: Alice Millar Chapel.', author: 'HS'},
    {src: 'assets/images/photos/chicago/chapel-2.jpg', w: 1422, h: 800, title: '@Northwestern University: Alice Millar Chapel in the morning.', author: 'HS'},
    {src: 'assets/images/photos/chicago/fall.jpg', w: 600, h: 800, title: '@Northwestern University: Autumn leaves outside office.', author: 'HS'},
    {src: 'assets/images/photos/chicago/fall-2.jpg', w: 1422, h: 800, title: '@Northwestern University: Autumn leaves outside office.', author: 'HS'},
    {src: 'assets/images/photos/chicago/fall-3.jpg', w: 1422, h: 800, title: '@Northwestern University: Autumn leaves outside office.', author: 'HS'},
    {src: 'assets/images/photos/chicago/flowers.jpg', w: 1422, h: 800, title: '@Northwestern University: Flowers blossoming outside office.', author: 'HS'},
    {src: 'assets/images/photos/chicago/mushroom.jpg', w: 1422, h: 800, title: '@Northwestern University: Mushrooms growing outside office.', author: 'HS'},
    {src: 'assets/images/photos/chicago/mushroom-2.jpg', w: 1422, h: 800, title: '@Northwestern University: Mushroom wilting outside office.', author: 'HS'},
    {src: 'assets/images/photos/chicago/home.jpg', w: 1067, h: 800, title: 'Home.', author: 'HS'},
    {src: 'assets/images/photos/chicago/home-2.jpg', w: 1067, h: 800, title: 'Home.', author: 'HS'},
    {src: 'assets/images/photos/chicago/home-plants.jpg', w: 1067, h: 800, title: 'Home plants.', author: 'HS'},
    {src: 'assets/images/photos/chicago/home-plants-2.jpg', w: 1067, h: 800, title: 'Home plants.', author: 'HS'},
    {src: 'assets/images/photos/chicago/paws.jpg', w: 1033, h: 800, title: 'Paws Chicago on Michigan Avenue.', author: 'HS'},
    {src: 'assets/images/photos/chicago/sunrise.jpg', w: 1422, h: 800, title: 'Sunrise on a Sunday morning.', author: 'HS'},
    {src: 'assets/images/photos/chicago/sunset.jpg', w: 1422, h: 800, title: 'View of Chicago sunset from home.', author: 'HS'},
    {src: 'assets/images/photos/chicago/trampoline.jpg', w: 600, h: 800, title: 'JUMP!', author: 'HS'},
    {src: 'assets/images/photos/chicago/xmas-lights.jpg', w: 1067, h: 800, title: 'Christmas lights at Lincoln Park Zoo.', author: 'HS'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
