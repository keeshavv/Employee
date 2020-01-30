import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router} from '@angular/router'
import { AppComponent } from './app.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NameFilterPipe} from  './name-filter.pipe'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomeComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    NameFilterPipe,
    EmployeeDetailsComponent,
    EditEmployeeComponent
  ],
  imports: [
    ReactiveFormsModule ,HttpModule, FormsModule,HttpClientModule, BrowserModule, RouterModule.forRoot([
      {path:"", component:EmployeeHomeComponent},
      {path:"addEmployee", component:AddEmployeeComponent},
      {path:"employee", component:EmployeeListComponent},
      {path: "employee/:empid", component:EditEmployeeComponent},
      {path: "details/:eid", component:EmployeeDetailsComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
