import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
     <ng-content></ng-content> 
  `,
  styles: [
  ]
})
export class ChildComponent {

}
