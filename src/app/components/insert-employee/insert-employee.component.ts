import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpInfoModule } from 'src/app/modules/emp-info/emp-info.module';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css']
})
export class InsertEmployeeComponent implements OnInit {
  model:any = [];
  svc:EmployeeInfoService;
  emp=new EmpInfoModule();
  constructor(svc:EmployeeInfoService) {
    this.svc=svc;
   }

  ngOnInit(): void {
  }
  InsertData(empForm:NgForm):void{
    console.log(empForm.value);
    this.emp.EmpID = empForm.value.eid;
    this.emp.EmpName = empForm.value.name;
    this.emp.Dept = empForm.value.dept;
    this.emp.Desg = empForm.value.desg;
    this.emp.Salary=empForm.value.salary;
    this.emp.projid=empForm.value.pid;
    this.emp.password=empForm.value.pwd;
    this.svc.InsertEmployee(this.emp).subscribe((data:boolean)=>{
      alert(data);
      if(data==true){
        alert("New Employee Registered");
      }
    })
  }
}
