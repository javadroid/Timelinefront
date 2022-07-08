import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from '../shared/modal/modal.component';
import { CrudComponent } from './crud/crud.component';
import { ProjectPersonnelsComponent } from './projectpersonnels/projectpersonnels.component';

const routes: Routes = [{
  path:'',component:ProjectPersonnelsComponent,
},{path:'modal', component:ModalComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPersonnelsRoutingModule { }
