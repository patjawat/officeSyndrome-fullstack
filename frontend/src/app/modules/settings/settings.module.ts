import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../material.module';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    SettingsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    AngularMaterialModule

  ]
})
export class SettingsModule { }
