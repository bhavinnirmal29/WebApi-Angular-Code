import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpInfoModule } from 'src/app/modules/emp-info/emp-info.module';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'app-show-employee-by-id',
  templateUrl: './show-employee-by-id.component.html',
  styleUrls: ['./show-employee-by-id.component.css']
})
export class ShowEmployeeByIDComponent implements OnInit {
  model:any = [];
  EmpID:number;
  EmpName:string;
  Dept:string;
  Desg:string;
  Salary:number;
  projid:number;
  password:string
  data:any;
  id:number;
  svc:EmployeeInfoService
  constructor(svc:EmployeeInfoService) { 
    this.svc=svc;
  }

  ngOnInit(): void {
  }
  SelectById(empIdForm:NgForm):void{
    this.id=empIdForm.value.eid;
    this.svc.GetEmployeeByID(this.id).subscribe((data:EmpInfoModule)=>{
      this.EmpID = data.EmpID;
      this.EmpName = data.EmpName;
      this.Dept = data.Dept;
      this.Desg = data.Desg;
      this.Salary = data.Salary;
      this.projid = data.projid;
      this.password = data.password;
      console.log(data.EmpID+" "+data.EmpName);
    })
  }
}
