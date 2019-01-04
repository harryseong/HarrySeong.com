import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  places: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.places = db.collection<any>('places');
  }

  _sort(array: string[], parameter: string): string[] {
    return Object.assign([], array)
      .sort((a, b) => (a[parameter] > b[parameter]) ? 1 : ((b[parameter] > a[parameter] ? -1 : 0)));
  }
}
