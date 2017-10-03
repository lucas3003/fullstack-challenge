import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    DoughnutChartComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
