import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('video') videoElement: any;
  video: any;
  vidStatus: string;

  constructor() { }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.setVidStatus();
  }

  setVidStatus() {
    if (!this.video.paused) {
      this.vidStatus = 'playing';
    } else if (this.video.paused) {
      this.vidStatus = 'paused';
    }
  }
  toggleVideo() {
    if (!this.video.paused) {
      this.video.pause();
      this.setVidStatus();
    } else if (this.video.paused) {
      this.video.play();
      this.setVidStatus();
    }
  }

  videoEnded() {
    this.vidStatus = 'stopped';
  }


}
