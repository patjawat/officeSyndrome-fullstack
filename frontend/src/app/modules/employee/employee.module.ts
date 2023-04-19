import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { LsitComponent } from './lsit/lsit.component';
import { FormsComponent } from './forms/forms.component';
import { AngularMaterialModule } from '../../material.module';


@NgModule({
  declarations: [
    EmployeeComponent,
    LsitComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    AngularMaterialModule
  ]
})
export class EmployeeModule { }
