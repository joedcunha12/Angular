import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard'

import {AdminComponent} from './admin/admin.component'
import {Role} from './_models/role'


const routes: Routes = [    {
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'login',
  component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
