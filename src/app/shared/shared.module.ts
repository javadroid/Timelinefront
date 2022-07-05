import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';




@NgModule({
  declarations: [
    InputComponent,ModalComponent, TableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [InputComponent,TableComponent, ModalComponent]
})
export class SharedModule { }
