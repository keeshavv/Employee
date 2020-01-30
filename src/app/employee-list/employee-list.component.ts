import { Component, OnInit } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { Http,Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private headers = new Headers({ 'Content-Type': 'application/json'});
  title="Employee Management System";
  nameFilter:any;
  Employees :any;
  leng:number;
  id:number;
  constructor (private httpService: HttpClient, private http:Http) { }
  
 
    fetchData()
    {
      this.httpService.get('http://localhost:7000/Employee').subscribe(
      data => {
        this.Employees = data ;
        
    }
      )
  }
    
  deleteemp = function(id) {
    if(confirm("Are you sure?")) {
      const url = `${"http://localhost:7000/Employee"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
        this.fetchData();
        })
    }
  }
  ngOnInit () { 
  
    this.httpService.get('http://localhost:7000/Employee').subscribe(
      data => {
        this.Employees = data ;
        for(var i = 0; i < this.Employees.length ; i++) { }
        this.leng=i;
      }   
      )
  
      }
    
  

}

