import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  providers: [EmployeeServiceService]
})
export class EmployeeFormComponent implements OnInit {

  nameStyle: string = "nameInput";
  lastNameStyle: string = "lastNameInput";
  participationStyle: string = "participationInput";

  name:string = '';
  lastName:string = '';
  participation:string = '';

  constructor(private employeeService: EmployeeServiceService, private messageService: MessageService) { }

  ngOnInit() {
  }

  newEmployee(){
  	this.nameStyle = 'nameInput';
  	this.lastNameStyle = 'lastNameInput';
  	this.participationStyle = 'participationInput';

  	this.employeeService.newEmployee(this.name, this.lastName, this.participation).subscribe(data => {
  	  if(data.success == 'true'){
  	  	this.messageService.sendMessage('new employee created!');
  	  	this.name = "";
  	  	this.lastName= "";
  	  	this.participation = "";
  	  }
  	  else{
  	  	if(data.name == 'false')
  	  		this.nameStyle = 'nameInput invalid';

  	  	if(data.lastName == 'false')
  	  		this.lastNameStyle = 'lastNameInput invalid';

  	  	if(data.participation == 'false')
  	  		this.participationStyle = 'participationInput invalid'

  	  }



  	});
  	
  }

}
