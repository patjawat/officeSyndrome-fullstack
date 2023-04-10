import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
// import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sales',
        component: HomeComponent
      },
      { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
    ]
  }
  // {
  //   path: '', component: HomeComponent, pathMatch: 'full'
  // },
  // { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
