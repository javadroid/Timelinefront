"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardModule = void 0;
var shared_module_1 = require("../shared/shared.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var slider_1 = require("@angular/material/slider");
var flex_layout_1 = require("@angular/flex-layout");
var angular_material_module_module_1 = require("../angular-material-module/angular-material-module.module");
var input_1 = require("@angular/material/input");
var forms_1 = require("@angular/forms");
var users_routing_module_1 = require("../users/users-routing.module");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                dashboard_routing_module_1.DashboardRoutingModule,
                forms_1.FormsModule,
                slider_1.MatSliderModule, flex_layout_1.FlexLayoutModule,
                angular_material_module_module_1.AngularMaterialModule,
                users_routing_module_1.UsersRoutingModule, forms_1.ReactiveFormsModule, shared_module_1.SharedModule, input_1.MatInputModule
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
