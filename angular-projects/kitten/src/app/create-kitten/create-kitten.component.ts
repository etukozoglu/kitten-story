import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  title: string = "New Resident";
  kitten: Kitten = new Kitten();

  // Output is used to link a property of a child component and emit it through the EventEmitter
  // Ici output  est utilisé pour informer le parent (kitten) que le bouton est cliqué
  @Output() addEvent = new EventEmitter<Kitten>();

  constructor() { }

  ngOnInit() { }

  addKittenToList() {
    this.addEvent.emit(this.kitten);
    this.kitten = new Kitten();
  }

}
