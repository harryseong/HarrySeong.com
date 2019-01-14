import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {SpotifyApiService} from '../../shared/services/api/spotify/spotify-api.service';
import {Subscription, timer} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
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
  currentlyPlayingRsp: any;
  currentlyPlaying$: Subscription;
  songUri: any;

  constructor(private spotifyApiService: SpotifyApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.currentlyPlaying$ = timer(0, 5000).subscribe(() => {
      this.spotifyApiService.getCurrentlyPlaying().subscribe(
        rsp => {
          this.currentlyPlayingRsp = rsp;
          this.songUri = this.sanitizer.bypassSecurityTrustResourceUrl(rsp.item.uri);
          console.log('Refreshed currently playing track.');
        },
        error => {
          this.currentlyPlayingRsp = null;
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.currentlyPlaying$.unsubscribe();
    console.log('Unsubscribed from "currently playing" subscription.');
  }
}
