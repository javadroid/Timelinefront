import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { InputComponent } from './input/input.component';
import { AngularMaterialModule } from '../angular-material-module/angular-material-module.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    InputComponent,ModalComponent, TableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,

    HttpClientModule,

    AngularMaterialModule,

    FlexLayoutModule
  ],
  exports: [InputComponent,TableComponent, ModalComponent,MatInputModule,MatFormFieldModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
