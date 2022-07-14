import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanloadGuard } from '../shared/guards/canload.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'', component: UsersComponent},
  {path:'login', component: LoginComponent},
  {canLoad:[CanloadGuard], path:'dashboard',component:DashboardComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
