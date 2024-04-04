import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  title: string = 'Current Residents';

  // @Input('display-list') list: Kitten[] = [];

  constructor() { }

  ngOnInit() { }

  // Parent to enfant
  @Input() kittens: Kitten[] = [];
  @Output() onAdopt = new EventEmitter<Kitten>();

  adoptKitten(kitten: Kitten) {
    this.onAdopt.emit(kitten);
  }

}
