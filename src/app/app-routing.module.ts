import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';
import { LoginComponent } from './components/login/login.component';
import { SelectprojbyidComponent } from './components/selectprojbyid/selectprojbyid.component';
import { ShowAllEmployeesComponent } from './components/show-all-employees/show-all-employees.component';
import { ShowEmployeeByIDComponent } from './components/show-employee-by-id/show-employee-by-id.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';


const routes: Routes = [
  {path:'InsertEmployee',component:InsertEmployeeComponent},
  {path:'ShowAllEmployees',component:ShowAllEmployeesComponent},
  {path:'ShowEmployeeByID',component:ShowEmployeeByIDComponent},
  {path:'Login',component:LoginComponent},
  {path:'Delete',component:DeleteEmployeeComponent},
  {path:'SelectProjById',component:SelectprojbyidComponent},
  {path:'UpdateProject',component:UpdateProjectComponent},
  {path:'UpdateEmployee',component:UpdateEmployeeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
