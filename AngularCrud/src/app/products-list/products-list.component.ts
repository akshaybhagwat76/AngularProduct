import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories.model';
import { Products } from '../models/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories: Categories[] = [
    { id: 1, categoryname: 'Phone' },
    { id: 2, categoryname: 'Tablets' },
    { id: 3, categoryname: 'Computers' },
    { id: 4, categoryname: 'Watches' }
  ];

  products: Products[] = [
    { id: 1, productname: 'MI', categoryid: 1, amount: 30, status: true },
    { id: 2, productname: 'Samsung', categoryid: 1, amount: 40, status: true },
    { id: 3, productname: 'Asus', categoryid: 1, amount: 34, status: true },
    { id: 4, productname: 'Lenovo', categoryid: 2, amount: 100, status: true },
    { id: 5, productname: 'Samsung-tab', categoryid: 2, amount: 130, status: true },
    { id: 6, productname: 'ZenPhone', categoryid: 2, amount: 95, status: true },
    { id: 7, productname: 'Intex', categoryid: 3, amount: 85, status: true },
    { id: 8, productname: 'Samsung-Laptop', categoryid: 3, amount: 80, status: true },
    { id: 9, productname: 'Acer', categoryid: 3, amount: 49, status: true },
    { id: 10, productname: 'I3 Core', categoryid: 3, amount: 30, status: true },
    { id: 11, productname: 'Alaxala', categoryid: 3, amount: 45, status: true },
    { id: 12, productname: 'BlackBerry', categoryid: 1, amount: 30, status: true },
    { id: 13, productname: 'Casio', categoryid: 1, amount: 69, status: true },
    { id: 14, productname: 'Dell', categoryid: 3, amount: 46, status: true },
    { id: 15, productname: 'HP', categoryid: 3, amount: 456, status: true },
  ];


}
