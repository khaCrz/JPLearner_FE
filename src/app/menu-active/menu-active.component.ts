import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { letters } from '../models/hiragana';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-active',
  templateUrl: './menu-active.component.html',
  styleUrls: ['./menu-active.component.css']
})

export class MenuActiveComponent implements DoCheck {
  //store all letters
  letters: any = letters
  //to check if all letters are choosen
  isAll: boolean = false;
  //to check if one column of letters are choosen
  isAlla: boolean = false;
  isAlli: boolean = false;
  isAllu: boolean = false;
  isAlle: boolean = false;
  isAllo: boolean = false;
  //to check if one row of letters are choosen
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
  // to check if is training
  train: boolean = false;
  isTraning = false;
  // to check for choosing level
  level1: boolean = false;
  level2: boolean = true;
  level3: boolean = false;

  // to check for disable option train, swap alphabetic and blur mode for table letters
  status: boolean = true;
  selectedOption: string;
  // default alphabetic
  alphabet: string = 'hiragana'
  // all options
  options = ['hiragana', 'katakana'];

  // save data for training
  listLetterChoose = []

  //data for training mode 2
  numOfSen = 5;


  constructor() {
  }


  /*
  * Event handlers when dom is changed
  * @author Kha
  */
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


  /*
  * Event handlers click to choose a level for train component
  * @author Kha
  */
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

  /*
  * Event handlers click button "Start train"
  * Display a component training
  * @author Kha
  */
  clickTrain() {
    this.isTraning = !this.isTraning;
    if (!this.isTraning) {
      this.listLetterChoose = []
    } else {
      this.listLetterChoose = []
      for (let letter in this.letters) {
        if (this.letters[letter].active)
          this.listLetterChoose.push(this.letters[letter])
      }
    }
  }

  /*
  * Event handlers click on one letter on table
  * @author Kha
  */
  clickletter(letter) {
    letter.active = !letter.active
  }

  /*
  * Event handlers click choose all letters on table
  * @author Kha
  */
  clickAllLetters() {
    this.isAll = !this.isAll
    for (let letter in this.letters) {
      this.letters[letter].active = this.isAll
    }
  }

  /*
  * Event handlers click one row on table
  * @author Kha
  */
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

  /*
  * Event handlers click one column on table
  * @author Kha
  */
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
