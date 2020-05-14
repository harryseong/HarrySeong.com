import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/services/api/api.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-under-contruction',
  templateUrl: './under-contruction.component.html',
  styleUrls: ['./under-contruction.component.scss'],
  animations: [
    trigger('greetingFormAnimations', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('1s ease', style({ opacity: 1})),
      ]),
      transition(':leave', [
        style({ opacity: 1}),
        animate('1s ease', style({ opacity: 0})),
      ]),
    ]),
    trigger('greetingMessageAnimations', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('0.5s 1s ease', style({ opacity: 1})),
      ])
    ]),
  ]
})
export class UnderContructionComponent implements OnInit {
  greetingMsg: string;
  greetingForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  artist: string;
  song: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const artistSubscription: Subscription = this.apiService.getArtistById(1).subscribe(rsp => this.artist = rsp.name);
    const songSubscription: Subscription = this.apiService.getSongById(1).subscribe(rsp => this.song = rsp.name);
  }

  pleaseGreetMe() {
    const name = this.greetingForm.get('name').value;
    const greetingSubscription: Subscription = this.apiService.getGreeting(name).subscribe(
      rsp => this.greetingMsg = rsp['content'],
      error1 => {
        console.error('Unable to contact backend API server. [Error]: ' + error1);
        this.greetingMsg = 'Hmm... it looks like we are currently unable to connect to our backend wizards... ';
      },
    );
    this.greetingForm.get('name').reset('');
  }
}
