
import { ActivityAssignmentRoutingModule } from './activityassignment-routing.module';
import { ActivityAssignmentComponent } from './activityassignment/activityassignment.component';
import { CrudComponent } from './crud/crud.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from '../shared/modal/modal.component';
import { InputComponent } from '../shared/input/input.component';


import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material-module/angular-material-module.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from '../users/users-routing.module';


@NgModule({
  declarations: [
    ActivityAssignmentComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    ActivityAssignmentRoutingModule,SharedModule,

  ]
})
export class ActivityAssignmentModule { }
