"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ActivityAssignmentModule = void 0;
var activityassignment_routing_module_1 = require("./activityassignment-routing.module");
var activityassignment_component_1 = require("./activityassignment/activityassignment.component");
var crud_component_1 = require("./crud/crud.component");
var shared_module_1 = require("../shared/shared.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ActivityAssignmentModule = /** @class */ (function () {
    function ActivityAssignmentModule() {
    }
    ActivityAssignmentModule = __decorate([
        core_1.NgModule({
            declarations: [
                activityassignment_component_1.ActivityAssignmentComponent,
                crud_component_1.CrudComponent
            ],
            imports: [
                common_1.CommonModule,
                activityassignment_routing_module_1.ActivityAssignmentRoutingModule, shared_module_1.SharedModule,
            ]
        })
    ], ActivityAssignmentModule);
    return ActivityAssignmentModule;
}());
exports.ActivityAssignmentModule = ActivityAssignmentModule;
