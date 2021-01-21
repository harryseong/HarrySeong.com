import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Subscription, timer} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {AwsApiService} from '../../shared/services/api/aws/aws-api.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0)'}),
        animate('0.5s 0.75s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class MusicComponent implements OnInit, OnDestroy {
  pageHeader = 'music';
  pageSubheader = 'i hear vibrations in the air...';
  pageExplanation = 'Music is a daily part of my life, so I decided to pay an homage to it with this page. ' +
    'Music inspires and motivates me in so many ways that it is difficult to imagine life without music. There are, however, ' +
    'some moments when silence is a welcome companion; it depends on my mood which I prefer.';
  pageTech = 'This page utilizes the Spotify API to retrieve information about the song being played on my Spotify account.';
  triedSpotifyApi = false;
  currentlyPlayingRsp: any;
  currentlyPlaying$: Subscription;
  songUri: any;

  constructor(private awsApiService: AwsApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.currentlyPlaying$ = timer(0, 7500).subscribe(() => {
      this.getCurrentlyPlaying();
    });
  }

  ngOnDestroy(): void {
    this.currentlyPlaying$.unsubscribe();
    this.currentlyPlayingRsp = null;
    console.log('Unsubscribed from currentlyPlaying$.');
  }
  getCurrentlyPlaying() {
    this.awsApiService.getSpotifyCurrentlyPlaying().subscribe(
      rsp => {
        // console.log(JSON.stringify(rsp));
        if (rsp !== null) {
          this.currentlyPlayingRsp = rsp;

          if (rsp.item !== undefined && rsp.item !== null) {
            this.songUri = this.sanitizer.bypassSecurityTrustResourceUrl(rsp.item.uri);
            console.log('Refreshed currently playing track.');
          } else {
            this.currentlyPlayingRsp = null;
            console.warn('Returned currentlyPlayingRspItem is null.');
          }
        } else {
         this.currentlyPlayingRsp = null;
         console.warn('Returned currentlyPlayingRsp is null.');
        }
        this.updateTriedSpotifyApi();
      },
      error => {
        console.warn('Spotify API error.');
        this.currentlyPlayingRsp = null;
        this.updateTriedSpotifyApi();
      }
    );
  }

  updateTriedSpotifyApi() {
    if (!this.triedSpotifyApi) {
      this.triedSpotifyApi = true;
    }
  }
}
