import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, FormBuilder, Validators} from '@angular/forms'
import { Http } from '@angular/http';
import {Response, Headers } from '@angular/http';
import {ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  title="Employee Manangement System";
  AddForm: FormGroup;
  productObj:object = {};
  constructor(private fb: FormBuilder,private http: Http, private router:Router) {}

  AddEmployee  = function(employee) {
    this.productObj = {
      "name": employee.name,
      "location": employee.location,
      "email" : employee.email,
      "mobile" : employee.mobile
    }
    this.http.post("http://localhost:7000/Employee/", this.productObj).subscribe((res:Response) => {
      this.router.navigate(['/employee'])
    })
  }

  ngOnInit() {
    this.AddForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
      location: ['',[Validators.required ,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
      email: ['',[Validators.required,Validators.pattern('[a-z0-9.@]*')]],
      mobile:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]]
    });
  }
  
}
