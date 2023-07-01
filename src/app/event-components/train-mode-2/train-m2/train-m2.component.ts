import { AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';

export interface LetterAnswer {
  letter: string;
  romaji: string;
  status: string;

}

@Component({
  selector: 'app-train-m2',
  templateUrl: './train-m2.component.html',
  styleUrls: ['./train-m2.component.css']
})
export class TrainM2Component implements OnInit {
  //data recive from parent component
  @Input() listLetters: any[] = [];
  @Input() typeAlphabetic: string = '';
  @Input() numOfSen: number = 0;


  //
  sentenses: LetterAnswer[] = [];
  textAnswers: string = ''


  /*
  * Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  * Add 'implements AfterViewInit' to the class.
  * @author kha
  */
  ngOnInit(): void {
    this.generateSentence()
  }


  generateSentence() {
    this.sentenses = []
    while (this.sentenses.length < this.numOfSen) {
      const randomIndex = Math.floor(Math.random() * this.listLetters.length);
      this.sentenses.push({
        letter: this.listLetters[randomIndex][this.typeAlphabetic],
        romaji: this.listLetters[randomIndex]['romaji'],
        status: 'none',
      })
      const randomNumber = this.listLetters[randomIndex][this.typeAlphabetic]
    }
  }

  onInputChanged() {
    if (this.textAnswers.charAt(this.textAnswers.length - 1) === ' ') {
      let checkAll = true
      if (this.sentenses.length == 0)
        checkAll = false

      for (let index = 0; index < this.sentenses.length; index++) {
        if (this.sentenses[index].status === 'false' || this.sentenses[index].status === 'none') {
          checkAll = false;
        }
      }
      if (checkAll) {
        this.textAnswers = 'Correct !!!'
        setTimeout(() => {
          this.textAnswers = ''
          this.generateSentence()
        }, 1500)
      }
    }

    if (!this.textAnswers.match(/Correct !!.+/g)) {
      let text = this.textAnswers.replace(/\s\s+/g, ' ').trim()

      let listRomaji = text.split(' ')
      if (text == '')
        this.sentenses[0].status = 'none'

      if (listRomaji.length <= this.sentenses.length) {
        for (let index = 0; index < listRomaji.length; index++) {
          if (listRomaji[index] != '') {
            if (this.sentenses[index].romaji === listRomaji[index]) {
              this.sentenses[index].status = 'true'
            } else {
              this.sentenses[index].status = 'false'
            }
          }
        }
        for (let index = listRomaji.length; index < this.sentenses.length; index++) {
          this.sentenses[index].status = 'none'
        }
      }
    }

  }



}
