import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpInfoModule } from 'src/app/modules/emp-info/emp-info.module';
import { ProjInfoModule } from 'src/app/modules/proj-info/proj-info.module';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';
import { ProjectInfoService } from 'src/app/services/project-info.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  model:any=[];
  svc:EmployeeInfoService;
  svc1:ProjectInfoService;
  einfo=new EmpInfoModule();
  plist: ProjInfoModule[];
  constructor(svc:EmployeeInfoService,svc1:ProjectInfoService) {
    this.svc=svc;
    this.svc1=svc1;
   }

  ngOnInit(): void {
    this.model.eid=localStorage.getItem("EID");
    this.model.name=localStorage.getItem("EmpName");
    this.model.dept=localStorage.getItem("Dept");
    this.model.desg=localStorage.getItem("Desg");
    this.model.projid=localStorage.getItem("ProjId");
    this.model.salary=localStorage.getItem("Salary");
    this.model.pwd = localStorage.getItem("Password");
    this.svc1.GetProjects().subscribe((data:ProjInfoModule[])=>{
      this.plist=data;
      });
  }
  UpdateData(empForm:NgForm){
    console.log(empForm.value);
    this.einfo.EmpID = this.model.eid;
    this.einfo.EmpName=this.model.name;
    this.einfo.Dept=this.model.dept;
    this.einfo.Desg=this.model.desg;
    this.einfo.Salary=this.model.salary;
    this.einfo.projid=empForm.value.projid;
    this.einfo.password=this.model.pwd;
    alert(this.einfo.projid);
    this.svc.UpdateEmployee(this.model.eid,this.einfo).subscribe((data:boolean)=>{
      if(data==true){
        alert("Update Successfull");
      }
      else{
        alert("Update Unsuccessfull");
      }
    })
  }
}
