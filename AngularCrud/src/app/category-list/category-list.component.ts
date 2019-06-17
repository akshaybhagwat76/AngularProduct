import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categories } from '../models/categories.model';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  @Output() countChange = new EventEmitter<any>();
  @Output() triggerChange = new EventEmitter<any>();

  ngOnInit() {
  }

  categories: Categories[] = [
    { id: 1, categoryname: 'Phone' },
    { id: 2, categoryname: 'Tablets' },
    { id: 3, categoryname: 'Computers' }
  ];

  checkboxes = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]

  updateGrid(e, type) {
    if (e.target.checked) {
      let obj = { id: type };
      this.checkboxes.push(obj);
    }
    else {
      let updateItem = this.checkboxes.find(this.findIndexToUpdate, type);

      let index = this.checkboxes.indexOf(updateItem);

      this.checkboxes.splice(index, 1);
    }
    this.countChange.emit({checkboxes: this.checkboxes,categories: this.categories});
  }

  findIndexToUpdate(type) {
    return type.id === this;
  }

  setStatusWiseCategories(status: any) {
    if (status == "true") {
      this.categories = [
        { id: 1, categoryname: 'Phone' },
        { id: 2, categoryname: 'Tablets' }
      ];
    }
    else if (status == "false") {
      this.categories = [
        { id: 3, categoryname: 'Computers' }
      ];
    } else {
      this.categories = [
        { id: 1, categoryname: 'Phone' },
        { id: 2, categoryname: 'Tablets' },
        { id: 3, categoryname: 'Computers' }
      ];
    }
  }
}
