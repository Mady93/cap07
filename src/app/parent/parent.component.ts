import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  template:  `<app-child>
  <h1>{{ title }}</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</app-child>`,
  styles: [
  ]
})
export class ParentComponent {
  title: string = 'Esempio ng-content';
}
