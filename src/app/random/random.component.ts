import { Component } from '@angular/core';

@Component({
  selector: 'app-random',
  template: `
    <button (click)="generaRandomNumber()">Genera numero casuale</button>
    <p>Random number: {{ randomNumber }}</p>
  `,
  styles: [
  ]
})
export class RandomComponent {
randomNumber:number=0;

generaRandomNumber(){
  this.randomNumber = Math.floor(Math.random() * 100) + 1;
}
}
