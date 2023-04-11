import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './bootstrap5/layout.component';
import { MatlayoutComponent } from './matlayout/matlayout.component';
import { MainShellComponent } from './layout/fragments/main-shell/main-shell.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: LayoutComponent,
    // component: LayoutAdminComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'sales',
        component: HomeComponent
      },
      { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
    ]
  }
  // { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
