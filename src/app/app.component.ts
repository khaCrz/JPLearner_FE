import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({ providedIn: 'root' })
export class AppComponent implements OnInit {
  title = 'jpl-app';
  counter: number = 100
  menu: boolean = false
  user: boolean = false
  chat: boolean = false
  chart: boolean = false
  time = new Date();
  intervalId;

  constructor(private router: Router) {
    this.activateClick('menu')
    router.navigateByUrl('menu')
  }
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
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
