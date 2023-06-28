import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-m1',
  templateUrl: './train-m1.component.html',
  styleUrls: ['./train-m1.component.css']
})
export class TrainM1Component {
  //data get from parent component
  @Input() listLetters: any[] = [];
  @Input() typeAlphabetic: string = '';

  isShowAnswer: boolean = true;
  // letter to display
  letterShow = 'click';
  // answer to display
  letterAnswer = '';
  // random position letters
  randomPosition = 0

  /*
  * Event handlers click letter to show answer
  * @author Kha
  */
  onClickLetter() {
    if (this.isShowAnswer) {
      let i = this.randomPosition
      do {
        this.randomPosition = Math.floor(Math.random() * this.listLetters.length);
      } while (this.randomPosition === i);
      this.letterShow = this.listLetters.length > 0 ? this.listLetters[this.randomPosition][this.typeAlphabetic] : ''
      this.isShowAnswer = false;
    } else {
      this.isShowAnswer = true;
    }
    this.letterAnswer = this.listLetters.length > 0 ? this.listLetters[this.randomPosition]['romaji'] : '';


  }

}
