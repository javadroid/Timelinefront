import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { activityRoutingModule } from './activity-routing.module';
import { activityComponent } from './activity/activity.component';
import { CrudComponent } from './crud/crud.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from '../shared/modal/modal.component';
import { InputComponent } from '../shared/input/input.component';


@NgModule({
  declarations: [
    activityComponent,
    CrudComponent,
  ],
  imports: [
    CommonModule,
    activityRoutingModule,SharedModule
  ]
})
export class activityModule { }
