import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/map';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
  providers: [EmployeeServiceService]
})

export class ListPeopleComponent implements OnInit {
  employees: any = {};
  
  constructor(private employeeService: EmployeeServiceService) { 
  	this.getEmployees();
  }

  ngOnInit() {
  }

  getEmployees(){
  	this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }
}

