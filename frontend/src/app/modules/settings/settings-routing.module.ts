import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { UsersComponent } from '../users/users.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'user', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
