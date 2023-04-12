import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'add', component: FormsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
