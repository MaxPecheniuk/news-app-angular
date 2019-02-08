import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../models/news.model';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  news: Array<NewsModel>;
  constructor(private newsData: FirebaseService) { }

  ngOnInit() {
    this.newsData.getData()
      .subscribe((data: Array<NewsModel>) => {
        this.news = data;
      });
  }

}
