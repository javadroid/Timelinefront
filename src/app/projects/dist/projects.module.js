"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var projects_routing_module_1 = require("./projects-routing.module");
var projects_component_1 = require("./projects/projects.component");
var crud_component_1 = require("./crud/crud.component");
var shared_module_1 = require("../shared/shared.module");
var slider_1 = require("@angular/material/slider");
var flex_layout_1 = require("@angular/flex-layout");
var angular_material_module_module_1 = require("../angular-material-module/angular-material-module.module");
var input_1 = require("@angular/material/input");
var forms_1 = require("@angular/forms");
var users_routing_module_1 = require("../users/users-routing.module");
var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        core_1.NgModule({
            declarations: [
                projects_component_1.ProjectsComponent,
                crud_component_1.CrudComponent,
            ],
            imports: [
                common_1.CommonModule,
                projects_routing_module_1.ProjectsRoutingModule, shared_module_1.SharedModule,
                forms_1.FormsModule,
                slider_1.MatSliderModule,
                flex_layout_1.FlexLayoutModule,
                angular_material_module_module_1.AngularMaterialModule,
                users_routing_module_1.UsersRoutingModule, forms_1.ReactiveFormsModule, input_1.MatInputModule
            ], schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
