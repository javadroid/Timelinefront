import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { InputComponent } from '../shared/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,ReactiveFormsModule,SharedModule
  ]
})
export class UsersModule { }
