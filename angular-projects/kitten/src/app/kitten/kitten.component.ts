import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.css']
})
export class KittenComponent implements OnInit {

  // Input links child component to parent component
  // Passer des données du parent à l'enfant
  @Input()
  kitten: Kitten = new Kitten();


  constructor() { }

  ngOnInit() {
}

}