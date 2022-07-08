"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.activityModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var activity_routing_module_1 = require("./activity-routing.module");
var activity_component_1 = require("./activity/activity.component");
var crud_component_1 = require("./crud/crud.component");
var shared_module_1 = require("../shared/shared.module");
var activityModule = /** @class */ (function () {
    function activityModule() {
    }
    activityModule = __decorate([
        core_1.NgModule({
            declarations: [
                activity_component_1.activityComponent,
                crud_component_1.CrudComponent,
            ],
            imports: [
                common_1.CommonModule,
                activity_routing_module_1.activityRoutingModule, shared_module_1.SharedModule
            ]
        })
    ], activityModule);
    return activityModule;
}());
exports.activityModule = activityModule;
