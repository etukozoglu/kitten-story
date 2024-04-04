import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  title: string = 'My Companion(s)';

  @Input() myKittens: Kitten[] = [];


  constructor() { }

  ngOnInit() {
  }


}
