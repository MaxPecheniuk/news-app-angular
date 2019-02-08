import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NewsModel } from '../models/news.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
