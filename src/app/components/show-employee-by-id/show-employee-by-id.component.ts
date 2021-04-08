import { Component, NgZone, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  svc:EmployeeInfoService;
  ngZone:NgZone;
  router:Router;
  constructor(svc:EmployeeInfoService,ngZone:NgZone,router:Router) { 
    this.svc=svc;
    this.ngZone = ngZone;
    this.router=router;
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
      localStorage.setItem("EID",this.EmpID.toString());
      localStorage.setItem("EmpName",this.EmpName);
      localStorage.setItem("Dept",this.Dept);
      localStorage.setItem("Desg",this.Desg);
      localStorage.setItem("Salary",this.Salary.toString());
      localStorage.setItem("ProjId",this.projid.toString());
      localStorage.setItem("Password",this.password);
      setTimeout(()=>
      {
        this.ngZone.run(()=>this.router.navigateByUrl('/UpdateEmployee'));
      },1000);
    })
  }
}
