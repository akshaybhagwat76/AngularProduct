import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
// import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  submitted=false;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null
  };  

  // create a property of type Partial<BsDatepickerConfig>
  // datePickerConfig: Partial<BsDatepickerConfig>;

  // In the constructor set containerClass property to the preferred theme
  constructor() {
    // this.datePickerConfig = Object.assign({},
    //   {
    //     containerClass: 'theme-dark-blue',
    //     dateInputFormat: 'MM/DD/YYYY'
    //   });
  }
  previewPhoto = false;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  ngOnInit() {
  }
  saveEmployee(newemployeeForm: Employee): void {
    this.submitted = true;
    console.log(newemployeeForm);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
