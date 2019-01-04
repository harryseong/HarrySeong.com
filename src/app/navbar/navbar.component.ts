import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/firebase/auth/auth.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        style({transform: 'translateY(-3em)'}),
        animate('750ms ease'),
      ]),
    ])
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}
}
