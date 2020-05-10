import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;

  authState = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        this.isLoggedIn = false;
        console.log('No user is currently logged in.');
      } else {
        // If logged in, check that the user exists in the firestore users collection.
        console.log('A user is logged in.');
        this.isLoggedIn = true;
        const usersRef = this.db.collection('users').doc(authState.email).ref;
        usersRef.get().then(doc => {
          // If the user does not exist, create a firestore user doc and set role to "user" by default.
          if (doc.exists) {
            // If the user does exist, check if the user is an admin.
            this.isAdmin = doc.data().role === 'admin';
            console.log('User, ' + authState.email + ' does exist. User is ' + (this.isAdmin ? '' : 'not ') + 'an admin.');
          } else {
            this.db.collection('users').doc(authState.email).set(
              {
                uid: authState.uid,
                email: authState.email,
                role: 'user'
              });
            this.isAdmin = false;
            console.log('User, ' + authState.email + ' did not exist in the Firestore.');
          }
        });
        return authState;
      }
    })
  );

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private snackBar: MatSnackBar, private router: Router,
              private zone: NgZone) {}

  login() {
    this.afAuth.signInWithPopup(new GoogleAuthProvider()).then(() => this.confirmLoginStatus());
  }

  logout() {
    this.afAuth.signOut().then(() => this.confirmLoginStatus());
    this.router.navigateByUrl('');
  }

  confirmLoginStatus() {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.openSnackBar('You are logged in.', 'OK', 4000);
      } else {
        this.openSnackBar('You are now logged out.', 'OK', 4000);
      }
    });
  }

  // Function for opening snackbar.
  openSnackBar(message: string, action: string, duration?: number) {
    this.zone.run(() => {
      this.snackBar.open(message, action, {
        duration: duration,
        verticalPosition: 'bottom'
      });
    });
  }
}
