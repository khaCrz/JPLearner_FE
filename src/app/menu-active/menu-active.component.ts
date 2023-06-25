import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { letters } from '../models/hiragana';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-active',
  templateUrl: './menu-active.component.html',
  styleUrls: ['./menu-active.component.css']
})

export class MenuActiveComponent implements DoCheck {
  letters: any = letters
  isAll: boolean = false;
  isAllR: boolean = false;
  isAllC: boolean = false;
  train: boolean = false;

  level1: boolean = false;
  level2: boolean = false;
  level3: boolean = false;

  status: boolean = true;
  selectedOption: string;

  alphabet: string = 'hiragana'

  options = ['hiragana', 'katakana'];

  constructor() {
  }

  ngDoCheck(): void {
    this.status = true
    if (this.level1 || this.level2 || this.level3) {
      for (let letter in this.letters) {
        if (this.letters[letter].active == true) {
          this.status = false
        }
      }
    }
  }

  onClickAlphabetic(value) {
    alert('123')
    this.alphabet = value
  }

  onClickLevel(num) {
    this.level1 = false;
    this.level2 = false;
    this.level3 = false;

    switch (num) {
      case '1': this.level1 = true; break;
      case '2': this.level2 = true; break;
      case '3': this.level3 = true; break;
    }
  }

  clickTrain() {
    alert('clickTrain')
  }

  clickletter(letter) {
    letter.active = !letter.active
  }

  clickAllLetters() {
    this.isAll = !this.isAll
    for (let letter in this.letters) {
      this.letters[letter].active = this.isAll
    }
  }

  clickRow(rowname) {
    this.isAllR = !this.isAllR
    for (let letter in this.letters) {
      if (this.letters[letter].vowel === rowname) {
        this.letters[letter].active = this.isAllR
      }
    }
  }

  clickColumn(columnname) {
    this.isAllC = !this.isAllC
    for (let letter in this.letters) {
      if (this.letters[letter].consonant === columnname) {
        this.letters[letter].active = this.isAllC
      }
    }
  }
}
