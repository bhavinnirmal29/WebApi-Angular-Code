import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpInfoModule } from 'src/app/modules/emp-info/emp-info.module';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any =[];
  svc:EmployeeInfoService;
  emp=new EmpInfoModule();
  constructor(svc:EmployeeInfoService) {
    this.svc = svc;
   }

  ngOnInit(): void {
  }
  Login(loginForm:NgForm):void{
    this.emp.EmpName = loginForm.value.name;
    this.emp.password = loginForm.value.pwd;
    this.svc.Login(this.emp.EmpName,this.emp.password).subscribe((data:string)=>{
      alert(data);
    })
  }
}
