import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeServiceService {


  private apiUrl = 'http://localhost:3000/employees'

  constructor(private http: Http) {} 

  getEmployees(){
  	return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }

  newEmployee(name, lastName, participation){
  	console.log('newEmployee called')
  	let employee = {'name': name, 'lastName': lastName, 'participation': participation}
  	return this.http.post(this.apiUrl, employee).map((res: Response) => res.json());
  }

}
