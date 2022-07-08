import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from '../shared/modal/modal.component';
import { CrudComponent } from './crud/crud.component';
import { ActivityAssignmentComponent } from './activityassignment/activityassignment.component';

const routes: Routes = [{
  path:'',component:ActivityAssignmentComponent,
},{path:'modal', component:ModalComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityAssignmentRoutingModule { }
