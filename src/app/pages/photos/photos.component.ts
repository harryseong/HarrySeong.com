import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
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
