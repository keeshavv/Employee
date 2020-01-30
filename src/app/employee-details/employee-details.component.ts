import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import {ActivatedRoute , Router} from '@angular/router';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
title="Employee Management System";
id:number;
data:object = {};
Employees:any;
private headers = new Headers({ 'Content-Type': 'application/json'});
  constructor(private http:HttpClient, private route:ActivatedRoute,private router:Router,private https:Http) { }

  ngOnInit() {
    this.id=parseInt(this.route.snapshot.paramMap.get('eid'));

    this.http.get("http://localhost:7000/Employee").subscribe(
      data => {
        this.Employees = data ;
        for(var i = 0; i < this.Employees.length ; i++) {
          if(parseInt(this.Employees[i].id) === this.id) {
            this.data = this.Employees[i];
            break;
          } 
        }
      }
    )
  }
    

}
