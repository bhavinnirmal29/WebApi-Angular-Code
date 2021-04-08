import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';
import { ShowAllEmployeesComponent } from './components/show-all-employees/show-all-employees.component';
import { ShowEmployeeByIDComponent } from './components/show-employee-by-id/show-employee-by-id.component';
import { LoginComponent } from './components/login/login.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { SelectprojbyidComponent } from './components/selectprojbyid/selectprojbyid.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertEmployeeComponent,
    ShowAllEmployeesComponent,
    ShowEmployeeByIDComponent,
    LoginComponent,
    DeleteEmployeeComponent,
    SelectprojbyidComponent,
    UpdateProjectComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
