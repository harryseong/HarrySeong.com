import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {SpotifyApiService} from '../../shared/services/api/spotify/spotify-api.service';
import {Subscription, timer} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

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
  pageExplanation = 'Music is an almost daily part of my life, so I decided to pay some sort of an homage to it with this page. ' +
    'Music inspires and motivates me in so many ways that it\'s pretty difficult to imagine life without music. There are, however, ' +
    'some moments when silence is a welcome companion. I suppose it really depends on my mood which I prefer.';
  pageTech = 'This page makes use of the Spotify API to retrieve information on what is currently playing on my Spotify account. ' +
    'The access token for the API is refreshed with a refresh token through a simple NodeJS Express app uploaded to Firebase as a ' +
    'function; this piece was implemented in order to conceal the refresh token from public view.';
  triedSpotifyApi = false;
  currentlyPlayingRsp: any;
  currentlyPlaying$: Subscription;
  songUri: any;
  accessToken: string;

  constructor(private spotifyApiService: SpotifyApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.currentlyPlaying$ = timer(0, 7500).subscribe(() => {
      if (this.accessToken == null) {
        this.spotifyApiService.refreshAccessToken().subscribe(rsp => {
          this.accessToken = rsp.access_token;
          this.getCurrentlyPlaying(this.accessToken);
        });
      } else {
        this.getCurrentlyPlaying(this.accessToken);
      }
    });
  }

  ngOnDestroy(): void {
    // this.currentlyPlaying$.unsubscribe();
    // this.currentlyPlayingRsp = null;
    // console.log('Unsubscribed from currentlyPlaying$.');
  }

  refreshAccessToken() {
    this.spotifyApiService.refreshAccessToken().subscribe(
      rsp => {
        this.accessToken = rsp.access_token;
        console.log('Spotify access token was successfully refreshed.');
      },
      error1 => console.error('There was an error refreshing the Spotify access token.')
    );
  }

  getCurrentlyPlaying(accessToken) {
    this.spotifyApiService.getCurrentlyPlaying(accessToken).subscribe(
      rsp => {
        console.log(JSON.stringify(rsp));
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
        console.warn('Spotify access token is expired.');
        this.currentlyPlayingRsp = null;
        this.refreshAccessToken();
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
