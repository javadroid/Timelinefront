import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { InputComponent } from '../shared/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { Inter } from './users/interceptor/inter';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material-module/angular-material-module.module';
import { MatInputModule } from '@angular/material/input';
import { ActivitiesComponent } from './dashboard/activities/activities.component';


@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
MatSliderModule,FlexLayoutModule,
    AngularMaterialModule,
    UsersRoutingModule,ReactiveFormsModule,SharedModule,MatInputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class UsersModule { }
