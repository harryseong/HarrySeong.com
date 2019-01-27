import {Component, Input, OnInit} from '@angular/core';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

@Component({
  selector: 'app-photos-gallery',
  templateUrl: './photos-gallery.component.html',
  styleUrls: ['./photos-gallery.component.css']
})
export class PhotosGalleryComponent implements OnInit {
  pswpElement: any;
  @Input() images: any[];

  constructor() { }

  ngOnInit() {
    this.pswpElement = document.querySelectorAll('.pswp')[0];
  }

  openPhotoGallery(images: any[]) {
    // define options (if needed)
    const options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    const gallery = new PhotoSwipe( this.pswpElement, PhotoSwipeUI_Default, images, options);
    gallery.init();
  }
}
