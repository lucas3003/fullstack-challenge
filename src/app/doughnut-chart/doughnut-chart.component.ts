import { Component, OnInit } from '@angular/core';
import { ChartsModule, Color } from 'ng2-charts/ng2-charts';
import { EmployeeServiceService } from '../employee-service.service';


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
  
  colorsUndefined: Array<Color>;
  colorsEmpty: Array<Color> = [];
  colorsOverride: Array<Color> = [{
    backgroundColor: 'green',
    hoverBackgroundColor: 'purple'
  }];
  colorsEmptyObject: Array<Color> = [{}];
  
  datasets: any[];

  constructor(private employeeService: EmployeeServiceService) {  
  	this.employeeService.getEmployees().subscribe(data => this.getEmployees(data));
  }

  ngOnInit() {
  }

  getEmployees(obj){
  	let labels:string[] = [];
  	let data:number[] = [];

  	console.log('entered here')
  	
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
