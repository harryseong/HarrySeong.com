import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-photos-header',
  templateUrl: './photos-header.component.html',
  styleUrls: ['./photos-header.component.css']
})
export class PhotosHeaderComponent implements OnInit {
  @Input() headerTitle: string;
  @Input() headerSubtitle: string;
  @Input() headerBlurb: string;

  constructor() { }

  ngOnInit() {
  }

}
