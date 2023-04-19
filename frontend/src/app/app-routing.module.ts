import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { UserLayoutComponent } from './modules/users/user-layout/user-layout.component';
import { MatlayoutComponent } from './core/template/layout/layout.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: MatlayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'profile',
        component: ProfileComponent
      },
      // { path: 'about', component: AboutComponent },
      // { path: 'upload', component: UploadFileComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    // component: LayoutComponent,
    // component: MatlayoutComponent,
    canActivate: [AuthGuard],

    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      
      {
        path: 'sales',
        component: HomeComponent
      },
      { path: 'employee', loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule) },
    ]
  },
  {
    path: 'users',
    component: UserLayoutComponent,
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'settings',
    component: MatlayoutComponent,
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
  },
  { path: 'dummy',component: MatlayoutComponent, loadChildren: () => import('./modules/dummy/dummy.module').then(m => m.DummyModule) },
  // { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
