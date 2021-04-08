import { Component, OnInit,NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProjInfoModule } from 'src/app/modules/proj-info/proj-info.module';
import { ProjectInfoService } from 'src/app/services/project-info.service';

@Component({
  selector: 'app-selectprojbyid',
  templateUrl: './selectprojbyid.component.html',
  styleUrls: ['./selectprojbyid.component.css']
})
export class SelectprojbyidComponent implements OnInit {
  model:any = [];
  projid:number;
  projname:string;
  domain:string;
  data:any;
  id:number;
  svc:ProjectInfoService;
  ngzone:NgZone;
  router:Router;
  //NgZone will inject any service which is external or internal to angular
  //Router
  constructor(svc:ProjectInfoService,ngZone:NgZone,router:Router) { 
    this.svc=svc;
    this.ngzone = ngZone;
    this.router=router;
  }

  ngOnInit(): void {
  }
  SelectProjById(projIdForm:NgForm):void{
    this.id=projIdForm.value.pid;
    this.svc.GetProjById(this.id).subscribe((data:ProjInfoModule)=>{
      this.projid = data.projid;
      this.projname = data.projname;
      this.domain = data.domain;
      console.log(data.projid+" "+data.projname+" "+data.domain);
      localStorage.setItem('PID',this.projid.toString());
      localStorage.setItem('ProjName',this.projname);
      localStorage.setItem('Domain',this.domain);
      setTimeout(()=>
      {
        this.ngzone.run(()=>this.router.navigateByUrl('/UpdateProject'));
      },1000); 
    })
  }

}
