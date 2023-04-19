import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyRoutingModule } from './dummy-routing.module';
import { DummyComponent } from './dummy.component';
import { AngularMaterialModule } from 'src/app/material.module';
import { FormDummyComponent } from './form-dummy/form-dummy.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListDummyComponent } from './list-dummy/list-dummy.component';

@NgModule({
  declarations: [
    DummyComponent,
    FormDummyComponent,
    ListDummyComponent
  ],
  imports: [
    CommonModule,
    DummyRoutingModule,
    AngularMaterialModule
    
  ]
})
export class DummyModule { }
