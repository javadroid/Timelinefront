import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material-module/angular-material-module.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { UsersComponent } from './users/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InputComponent } from './shared/input/input.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { AuthHttp } from './users/auth-http';
import { RouterModule } from '@angular/router';
import { Inter } from './users/users/interceptor/inter';
import { LoginComponent } from './users/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [MatSliderModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    UsersModule,
    BrowserAnimationsModule,FlexLayoutModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: Inter, multi: true },LoginComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
