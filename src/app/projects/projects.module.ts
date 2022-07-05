import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { CrudComponent } from './crud/crud.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from '../shared/modal/modal.component';
import { InputComponent } from '../shared/input/input.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    CrudComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,SharedModule
  ]
})
export class ProjectsModule { }
