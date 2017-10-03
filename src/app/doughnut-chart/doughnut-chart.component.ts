import { Component, OnInit } from '@angular/core';
import { ChartsModule, Color } from 'ng2-charts/ng2-charts';
import { EmployeeServiceService } from '../employee-service.service';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
  providers: [EmployeeServiceService]
})
export class DoughnutChartComponent implements OnInit {

  employees: any = {};

  name:string;
  
  public labels:string[] = [];
  public data:number[] = [];
  type:string = 'doughnut';
  public isDataAvailable:boolean = false;

  subscription: Subscription;

  constructor(private employeeService: EmployeeServiceService, private messageService: MessageService) {

    this.subscription = this.messageService.getMessage().subscribe(message => {this.updateEmployees(); this.isDataAvailable = false; });

  	this.updateEmployees();
  }

  private options: any = {
    legend: { position: 'right', labels: {fontSize: 14}}
  }

  ngOnInit() {
  }

  updateEmployees(){
  	this.employeeService.getEmployees().subscribe(data => this.getEmployees(data));
  }

  getEmployees(obj){
  	let labels:string[] = [];
  	let data:number[] = [];
  	
  	for(var i = 0; i < obj.employees.length; i++)
  	{
  		labels.push(obj.employees[i].name + ' ' + obj.employees[i].lastName);
  		data.push(obj.employees[i].participation);
  	}

  	this.labels = labels;
  	this.data = data;
	this.isDataAvailable = true;  	
  }

}
