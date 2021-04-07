import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  model:any=[];
  svc:EmployeeInfoService;
  id:number;
  constructor(svc:EmployeeInfoService) {
    this.svc=svc;
   }

  ngOnInit(): void {
  }
  DeleteEmployee(empIdForm:NgForm):void{
    this.id = empIdForm.value.eid;
    this.svc.DeleteEmployee(this.id).subscribe((data:boolean)=>{
      if(data==true){
        alert("Employee Deleted");
      }
      else{
        alert("No Deletions");
      }
    })
  }

}
