import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-statuschanger',
  templateUrl: './statuschanger.component.html',
  styleUrls: ['./statuschanger.component.css']
})
export class StatuschangerComponent implements OnInit {
  constructor() { }
  totalAmount: number = 0;

  @Output() changed = new EventEmitter<string>();

  ngOnInit() {
  }

  changechild(statusValue) {
    this.changed.emit(statusValue);
  }

}
