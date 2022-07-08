import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityAssignmentRoutingModule } from './activityassignment-routing.module';
import { ActivityAssignmentComponent } from './activityassignment/activityassignment.component';
import { CrudComponent } from './crud/crud.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from '../shared/modal/modal.component';
import { InputComponent } from '../shared/input/input.component';


@NgModule({
  declarations: [
    ActivityAssignmentComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    ActivityAssignmentRoutingModule,SharedModule
  ]
})
export class ActivityAssignmentModule { }
