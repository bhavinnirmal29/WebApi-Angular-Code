import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';
import { LoginComponent } from './components/login/login.component';
import { ShowAllEmployeesComponent } from './components/show-all-employees/show-all-employees.component';
import { ShowEmployeeByIDComponent } from './components/show-employee-by-id/show-employee-by-id.component';

const routes: Routes = [
  {path:'InsertEmployee',component:InsertEmployeeComponent},
  {path:'ShowAllEmployees',component:ShowAllEmployeesComponent},
  {path:'ShowEmployeeByID',component:ShowEmployeeByIDComponent},
  {path:'Login',component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
