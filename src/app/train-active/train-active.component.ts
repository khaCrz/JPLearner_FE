import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-active',
  templateUrl: './train-active.component.html',
  styleUrls: ['./train-active.component.css']
})
export class TrainActiveComponent {

  @Input() listLetters: any[] = [];
  trainIndex: number = 0;
  isShowAnswer: boolean = true;
  letterShow = 'click';
  letterAnswer = '';
  randomPosition = 0


  onClickLetter() {
    if (this.isShowAnswer) {
      let i = this.randomPosition
      do {
        this.randomPosition = Math.floor(Math.random() * this.listLetters.length);
      } while (this.randomPosition === i);
      this.letterShow = this.listLetters.length > 0 ? this.listLetters[this.randomPosition]['hiragana'] : ''
      this.isShowAnswer = false;
    } else {
      this.isShowAnswer = true;
    }
    this.letterAnswer = this.listLetters.length > 0 ? this.listLetters[this.randomPosition]['romaji'] : '';


  }

}
