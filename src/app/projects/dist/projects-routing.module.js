"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectsRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_component_1 = require("../shared/modal/modal.component");
var projects_component_1 = require("./projects/projects.component");
var routes = [{
        path: '', component: projects_component_1.ProjectsComponent
    }, { path: 'modal', component: modal_component_1.ModalComponent }];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());
exports.ProjectsRoutingModule = ProjectsRoutingModule;
