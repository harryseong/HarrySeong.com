import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-0.5em)' }),
        animate('1s 1.25s ease', style({ opacity: 1, transform: 'translateY(0)'}))
      ]),
    ]),
    trigger('videoLoadAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s .3s ease', style({ opacity: 0.5})),
      ]),
    ])
  ],
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
