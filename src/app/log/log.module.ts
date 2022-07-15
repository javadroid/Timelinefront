import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogComponent } from './log/log.component';
import { CrudComponent } from './crud/crud.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from '../shared/modal/modal.component';
import { InputComponent } from '../shared/input/input.component';


@NgModule({
  declarations: [
    LogComponent,
    CrudComponent
  ],
  imports: [CommonModule,
    LogRoutingModule, SharedModule]
})
export class LogModule { }
