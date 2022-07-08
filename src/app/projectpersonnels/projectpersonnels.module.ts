import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPersonnelsRoutingModule } from './projectpersonnels-routing.module';
import { ProjectPersonnelsComponent } from './projectpersonnels/projectpersonnels.component';
import { CrudComponent } from './crud/crud.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from '../shared/modal/modal.component';
import { InputComponent } from '../shared/input/input.component';


@NgModule({
  declarations: [
    ProjectPersonnelsComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    ProjectPersonnelsRoutingModule,SharedModule
  ]
})
export class ProjectPersonnelsModule { }
