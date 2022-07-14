import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import {  MatPaginatorModule, MatProgressSpinnerModule, MatSortModule } from "@angular/material";

@NgModule({
  declarations: [
    InputComponent,ModalComponent, TableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  exports: [InputComponent,TableComponent, ModalComponent,MatInputModule,MatFormFieldModule,]
})
export class SharedModule { }
