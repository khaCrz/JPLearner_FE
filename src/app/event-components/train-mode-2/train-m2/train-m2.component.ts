import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-train-m2',
  templateUrl: './train-m2.component.html',
  styleUrls: ['./train-m2.component.css']
})
export class TrainM2Component {
  @Input() listLetters: any[] = [];
  @Input() numOfSen: number = 0;
  @Input() numOfRep: number = 0;


}
