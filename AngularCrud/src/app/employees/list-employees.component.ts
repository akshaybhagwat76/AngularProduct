import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Products } from '../models/products.model';
import { Categories } from '../models/categories.model';
import { StatuschangerComponent } from '../statuschanger/statuschanger.component';
import * as _ from 'underscore';
import { CategoryListComponent } from '../category-list/category-list.component';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  constructor() { }
  public ProductDetails: object = [];
  @ViewChild(StatuschangerComponent) child: StatuschangerComponent;
  @ViewChild(CategoryListComponent) categorylistComponent: CategoryListComponent;
  amounts: number = 0;
  @Output() amount = new EventEmitter<number>();
  categoriesIds: any[] = [];
  currentStatus: any;
  selectedCategories: any[];
  isSelected : false;
  filteredProductsArray: any[];
  ngOnInit() {
    this.ProductDetails = this.products;
  }

  changechild(statusEvent) {
    this.amounts = 0;
    this.isSelected = false;
    let status = statusEvent.toLowerCase() == 'true' ? true : false;
    let filteredProducts: any;

    this.currentStatus = statusEvent;
    if(!status){
      this.filteredProductsArray === undefined;
    }
    if (statusEvent === "All" && this.filteredProductsArray === undefined) {
      filteredProducts = this.products;
    }
    else if (this.filteredProductsArray !== undefined) {
      let selectedCats = this.selectedCategories;
      this.filteredProductsArray = this.products.filter(function (item) {
        return selectedCats.indexOf(item.categoryid) > -1;
      });
      if (status == true || status == false && statusEvent !== "All") {
        this.filteredProductsArray = this.filteredProductsArray.filter(function (proStatus) {
          return proStatus.status == status;
        });
      }

      filteredProducts = this.filteredProductsArray;
    }
    else {
      let selectedCats = status ? [1, 2] : [3];
      filteredProducts = this.products.filter(function (proStatus) {
        return proStatus.status == status && selectedCats.includes(proStatus.categoryid);
      });
    }

    this.ProductDetails = filteredProducts;
    this.categorylistComponent.setStatusWiseCategories(statusEvent);
  }

  changeCategory($arrdata) {
    this.amounts = 0;
    this.isSelected = false;
    let currentCATStatus = this.currentStatus;

    //Converted category id object to array for getting index
    var convertToCategoryArr = $arrdata.checkboxes.map(function (obj) { return obj.id; });

    var visibledCategories = $arrdata.categories.map(function (obj) { return obj.id; });

    this.selectedCategories = convertToCategoryArr;

    //Get filtered product array by category id
    this.filteredProductsArray = this.products.filter(function (item) {
      return convertToCategoryArr.indexOf(item.categoryid) > -1;
    });

    //Check if status either true or false and not undefined
    if (currentCATStatus !== "All" && currentCATStatus !== undefined) {
      var categoriesStatus = this.filteredProductsArray.filter(function (statusWise) {
        return String(statusWise.status) === currentCATStatus;
      });
      this.filteredProductsArray = categoriesStatus;
    }

    if (visibledCategories.length > 0)
      this.filteredProductsArray.filter(function (categorySort) {
        return visibledCategories.indexOf(categorySort.categoryid) > -1;
      });

    let filteredCategory = [];
    this.filteredProductsArray.map((object, index, objects) => {
      visibledCategories.forEach(element => {
        // Check if this object matches the provided filters:
        let isVisible = object.categoryid == element;
        if (object.categoryid == element) {
          object.visible = isVisible;
          filteredCategory.push(object);
        }
      });
      this.filteredProductsArray = filteredCategory;
    });
    this.ProductDetails = this.filteredProductsArray;
  }

  setAmounts(proamount: number, isChecked: boolean) {
    isChecked ? this.amounts += proamount : this.amounts -= proamount;
  }

  //Used in html file to find category name from id
  getCategoryName(id: number) {
    return this.categories.find(x => x.id == id).categoryname;
  }

  getStatus(flag: boolean) {
    return flag ? "Active" : "Inactive";
  }

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/john.png'
    },
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
    { id: 15, productname: 'HP', categoryid: 3, amount: 456, status: false }
  ];

  categories: Categories[] = [
    { id: 1, categoryname: 'Phone' },
    { id: 2, categoryname: 'Tablets' },
    { id: 3, categoryname: 'Computers' }
  ];
}
