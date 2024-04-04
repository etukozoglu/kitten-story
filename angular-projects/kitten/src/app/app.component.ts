import { Component } from '@angular/core';
import { Kitten } from './kitten';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mykitten.com';

  kittens: Kitten[] = [];
  myKittens: Kitten[] = [];

  addKittenToList(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  adoptKitten(kitten: Kitten) {
    this.myKittens.push(kitten);
    this.kittens = this.kittens.filter(k => k !== kitten);
  }
}
