import { Injectable } from '@angular/core';
import { NewsModel } from './models/news.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  news: Array<NewsModel>;
    constructor(public db: AngularFireDatabase) {}

  getData() {
    return this.db.list('/news').valueChanges();
  }

  postData(post) {
      // console.log(post);
    // this.
    return this.db.list('/news').push(post);
  }
}
