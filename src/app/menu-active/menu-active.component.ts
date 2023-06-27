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

  isAlla: boolean = false;
  isAlli: boolean = false;
  isAllu: boolean = false;
  isAlle: boolean = false;
  isAllo: boolean = false;

  isAllvowel: boolean = false;
  isAllk: boolean = false;
  isAlls: boolean = false;
  isAllt: boolean = false;
  isAlln: boolean = false;
  isAllh: boolean = false;
  isAllm: boolean = false;
  isAlly: boolean = false;
  isAllr: boolean = false;
  isAllw: boolean = false;
  isAllnm: boolean = false;


  train: boolean = false;
  isTraning = false;

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
    this.isTraning = !this.isTraning;
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
    switch (rowname) {
      case 'a': {
        this.isAlla = !this.isAlla
        for (let letter in this.letters) {
          if (this.letters[letter].vowel === rowname) {
            this.letters[letter].active = this.isAlla
          }
        }
        break
      }
      case 'i': {
        this.isAlli = !this.isAlli
        for (let letter in this.letters) {
          if (this.letters[letter].vowel === rowname) {
            this.letters[letter].active = this.isAlli
          }
        }
        break
      }
      case 'u': {
        this.isAllu = !this.isAllu
        for (let letter in this.letters) {
          if (this.letters[letter].vowel === rowname) {
            this.letters[letter].active = this.isAllu
          }
        }
        break
      }
      case 'e': {
        this.isAlle = !this.isAlle
        for (let letter in this.letters) {
          if (this.letters[letter].vowel === rowname) {
            this.letters[letter].active = this.isAlle
          }
        }
        break
      }
      case 'o': {
        this.isAllo = !this.isAllo
        for (let letter in this.letters) {
          if (this.letters[letter].vowel === rowname) {
            this.letters[letter].active = this.isAllo
          }
        }
        break
      }
    }

  }

  clickColumn(columnname) {
    switch (columnname) {
      case 'vowel': {
        this.isAllvowel = !this.isAllvowel
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAllvowel
          }
        }
        break
      }
      case 'k': {
        this.isAllk = !this.isAllk
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAllk
          }
        }
        break
      }
      case 's': {
        this.isAlls = !this.isAlls
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAlls
          }
        }
        break
      }
      case 't': {
        this.isAllt = !this.isAllt
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAllt
          }
        }
        break
      }
      case 'n': {
        this.isAlln = !this.isAlln
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAlln
          }
        }
        break
      }
      case 'h': {
        this.isAllh = !this.isAllh
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAllh
          }
        }
        break
      }
      case 'm': {
        this.isAllm = !this.isAllm
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAllm
          }
        }
        break
      }
      case 'y': {
        this.isAlly = !this.isAlly
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAlly
          }
        }
        break
      }
      case 'r': {
        this.isAllr = !this.isAllr
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAllr
          }
        }
        break
      }
      case 'w': {
        this.isAllw = !this.isAllw
        for (let letter in this.letters) {
          if (this.letters[letter].consonant === columnname) {
            this.letters[letter].active = this.isAllw
          }
        }
        break
      }
      case 'nm': {
        this.isAllnm = !this.isAllnm
        this.letters.nm.active = this.isAllnm
        break
      }
    }



  }
}
