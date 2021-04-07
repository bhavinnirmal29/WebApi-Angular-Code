import { Component, OnInit } from '@angular/core';
import { EmpInfoModule } from 'src/app/modules/emp-info/emp-info.module';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'app-show-all-employees',
  templateUrl: './show-all-employees.component.html',
  styleUrls: ['./show-all-employees.component.css']
})
export class ShowAllEmployeesComponent implements OnInit {
  svc:EmployeeInfoService;
  empData:EmpInfoModule[];
  constructor(svc:EmployeeInfoService) {
    this.svc=svc;
   }

  ngOnInit(): void {
    this.svc.GetEmployees().subscribe((data:EmpInfoModule[])=>{
      this.empData=data;
      console.log(this.empData);
    })
  }

}
