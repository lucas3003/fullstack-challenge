import { Component, OnInit, Input } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  providers: [EmployeeServiceService]
})
export class EmployeeFormComponent implements OnInit {

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit() {
  }

  newEmployee(name:string, lastName:string, participation:number){
  	this.employeeService.newEmployee(name, lastName, participation).subscribe(data => console.log(data));
  }

}
