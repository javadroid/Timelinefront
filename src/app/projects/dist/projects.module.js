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
                projects_routing_module_1.ProjectsRoutingModule, shared_module_1.SharedModule
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
