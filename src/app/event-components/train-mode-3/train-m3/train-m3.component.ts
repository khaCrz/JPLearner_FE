import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-train-m3',
  templateUrl: './train-m3.component.html',
  styleUrls: ['./train-m3.component.css']
})
export class TrainM3Component {
  @Input() listLetters: any[] = [];
}
