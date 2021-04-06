import { Injectable } from '@angular/core';
import { ProjInfoModule } from '../modules/proj-info/proj-info.module';
import {Observer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {
  emp:ProjInfoModule;
  http:HttpClient;
  url:string = 'http://localhost:54189/api/ProjectInfo/';
  httpOptions={headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
  }
  constructor(http:HttpClient) {
    this.http=http;
   }
   GetProjects():Observable<ProjInfoModule[]>{
    return this.http.get<ProjInfoModule[]>(this.url + "/"+"GetProjects");
  }
}
