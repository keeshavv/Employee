import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import {ActivatedRoute , Router} from '@angular/router';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {FormGroup , FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
title="Employee Management System"
EditForm:FormGroup;
constructor(private fb:FormBuilder,private http:HttpClient, private route:ActivatedRoute,private router:Router,private https:Http) { }

  id:number;
  data:object = {};
  Employees :any;
  productObj:object = {};
private headers = new Headers({ 'Content-Type': 'application/json'});

EditEmployee(employee)
{
  this.productObj = {
    "name": employee.name,
    "location": employee.location,
    "email" : employee.email,
    "mobile" : employee.mobile
  }
  const url = `${"http://localhost:7000/Employee"}/${this.id}`;
  this.https.put(url, JSON.stringify(this.productObj), {headers: this.headers})
    .toPromise()
    .then(() => {
      this.router.navigate(['/employee']);
    })
  }
  ngOnInit() {
    this.EditForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
      location: ['',[Validators.required ,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
      email: ['',[Validators.required,Validators.pattern('[a-z0-9.@]*')]],
      mobile:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]]
    });

    this.id=parseInt(this.route.snapshot.paramMap.get('empid'));

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


