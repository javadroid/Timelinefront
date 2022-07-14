import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './users/login/login.component';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: LoginComponent},
  {path:'users',loadChildren:()=>import( './users/users.module').then(m=>m.UsersModule)},
  {path:'projects',loadChildren:()=>import( './projects/projects.module').then(m=>m.ProjectsModule)},
  {path:'log',loadChildren:()=>import( './log/log.module').then(m=>m.LogModule)},
  {path: 'projectpersonnels',loadChildren:()=>import('./projectpersonnels/projectpersonnels.module').then(m=>m.ProjectPersonnelsModule)},
  {path: 'activityassignment',loadChildren:()=>import('./activityassignment/activityassignment.module').then(m=>m.ActivityAssignmentModule)},


  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
