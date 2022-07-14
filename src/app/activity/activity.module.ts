
import { activityRoutingModule } from './activity-routing.module';
import { activityComponent } from './activity/activity.component';
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
    activityComponent,
    CrudComponent,
  ],
  imports: [
    CommonModule,
    activityRoutingModule,SharedModule,
    FormsModule,
    MatSliderModule,
    FlexLayoutModule,
    AngularMaterialModule,
    UsersRoutingModule,ReactiveFormsModule,MatInputModule
  ],schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class activityModule { }
