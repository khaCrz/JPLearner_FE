import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  title = 'jpl-app';
  counter: number = 100
  menu: boolean = false
  user: boolean = false
  chat: boolean = false
  chart: boolean = false
  constructor() {

  }

  activateClick(activities) {
    this.menu = false;
    this.user = false;
    this.chat = false;
    this.chart = false;
    switch (activities) {
      case 'menu': this.menu = true; break;
      case 'chat': this.chat = true; break;
      case 'chart': this.chart = true; break;
      case 'user': this.user = true; break;
    }
  }
}
