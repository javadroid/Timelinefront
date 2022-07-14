"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var animations_1 = require("@angular/platform-browser/animations");
var angular_material_module_module_1 = require("./angular-material-module/angular-material-module.module");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var slider_1 = require("@angular/material/slider");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var not_found_component_1 = require("./not-found/not-found.component");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var users_module_1 = require("./users/users.module");
var inter_1 = require("./users/users/interceptor/inter");
var login_component_1 = require("./users/login/login.component");
var flex_layout_1 = require("@angular/flex-layout");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, not_found_component_1.NotFoundComponent],
            imports: [slider_1.MatSliderModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                angular_material_module_module_1.AngularMaterialModule,
                users_module_1.UsersModule,
                animations_1.BrowserAnimationsModule, flex_layout_1.FlexLayoutModule
            ],
            providers: [{ provide: http_1.HTTP_INTERCEPTORS, useClass: inter_1.Inter, multi: true }, login_component_1.LoginComponent],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
