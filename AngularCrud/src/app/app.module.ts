import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule ,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProductsListComponent } from './products-list/products-list.component';
import { StatuschangerComponent } from './statuschanger/statuschanger.component';
import { CategoryListComponent } from './category-list/category-list.component';


const appRoutes : Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeesComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    ProductsListComponent,
    StatuschangerComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
