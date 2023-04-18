import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './bootstrap5/layout.component';
// import { MatlayoutComponent } from './layouts/matlayout/matlayout.component';
import { MainShellComponent } from './layout/fragments/main-shell/main-shell.component';
import { ProfileComponent } from './profile/profile.component';
// import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { LoginComponent } from './login/login.component';
// import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { UserLayoutComponent } from './users/user-layout/user-layout.component';
import { MatlayoutComponent } from './matlayout/matlayout.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: MatlayoutComponent,
    //   redirectTo: 'home',

    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      // { path: 'about', component: AboutComponent },
      // { path: 'upload', component: UploadFileComponent },
    ],
  },
  {
    path: '',
    // component: LoginLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }],
    // canActivate: [RoleGuard]
  },
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   pathMatch: 'full',
  //   redirectTo: 'home',
  //   children: [{ path: 'login', component: LoginComponent }],
  // },
  // {
  //   path: 'login',
  //   // component: LoginLayoutComponent,
  //   children: [{ path: 'login', component: LoginComponent }],
  //   // canActivate: [RoleGuard]
  // },
  {
    path: '',
    // component: LayoutComponent,
    // component: MatlayoutComponent,
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
      { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
    ]
  },
  {
    path: 'users',
    component: UserLayoutComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'settings',
    component: MatlayoutComponent,
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  // { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
