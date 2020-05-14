import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dino',
  templateUrl: './dino.component.html',
  styleUrls: ['./dino.component.scss'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0)'}),
        animate('0.5s 0.75s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('dinoAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0)'}),
        animate('0.5s 0.75s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition('* => jump', [
        style({ transform: 'translateY(0)'}),
        animate('0.2s ease', style({ transform: 'translateY(-4em)' })),
        animate('0.1s ease', style({ transform: 'translateY(0em)' })),
      ]),
      transition('* => fainted', [
        animate('1s ease', style({ transform: 'rotateZ(90deg)' })),
      ]),
      transition('fainted => revived', [
        style({ transform: 'rotateZ(90deg)' }),
        animate('1s ease', style({ transform: 'rotateZ(0)' })),
      ]),
      state('fainted', style({ transform: 'rotateZ(90deg)' })),
    ]),
  ]
})
export class DinoComponent implements OnInit {
  dinoState = '';
  dinoTalk = 'Hey, I like to jump! That\'s my thing. Click me and help me out!';
  dinoStamina = 100;
  color = 'primary';

  constructor() { }

  ngOnInit() { }

  dinoJump() {
    if (this.dinoState !== 'jump' && this.dinoState !== 'fainted' && this.dinoState !== 'revived') {
      console.log('Dino jump!');
      this.dinoState = 'jump';
      this.dinoStamina -= 5;

      if (this.dinoStamina > 0) {
        setTimeout(() => {this.dinoState = ''; }, 300);
      }

      if (this.dinoStamina === 85) {
        this.dinoTalk = null;
      }

      if (this.dinoStamina === 80) {
        this.dinoTalk = 'Oh gosh, I\'m so out of shape!';
      }

      if (this.dinoStamina === 65) {
        this.dinoTalk = null;
      }

      if (this.dinoStamina === 60) {
        this.dinoTalk = 'I\'m feeling faint!!';
      }

      if (this.dinoStamina === 45) {
        this.dinoTalk = null;
      }

      if (this.dinoStamina === 40) {
        this.dinoTalk = 'Why you do dis?!';
        this.color = 'warn';
      }

      if (this.dinoStamina === 25) {
        this.dinoTalk = null;
      }

      if (this.dinoStamina === 20) {
        this.dinoTalk = 'STAHP!! I THINK I\'LL FAINT!';
      }

      if (this.dinoStamina === 5) {
        this.dinoTalk = null;
      }

      if (this.dinoStamina === 0) {
        this.dinoTalk = 'NO MORE! GOTTA LAY DOWN...';
        this.dinoState = 'fainted';
      }
    }
  }

  revive() {
    this.dinoState = 'revived';
    this.dinoTalk = null;
    this.dinoStamina = 100;
    this.color = 'primary';
  }

  areYouOkay() {
    this.dinoState = '';
    this.dinoTalk = 'Yea, thanks for reviving me... you JERK!';
  }
}
