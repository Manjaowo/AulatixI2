import { Component } from '@angular/core';

/**
 * Generated class for the AtMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'at-menu',
  templateUrl: 'at-menu.html'
})

export class AtMenuComponent {

  text: string;

  constructor() {
    console.log('Hello AtMenuComponent Component');
    this.text = 'Hello World';
  }

}
