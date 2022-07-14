"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var not_found_component_1 = require("./not-found/not-found.component");
var login_component_1 = require("./users/login/login.component");
var routes = [{ path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: login_component_1.LoginComponent }, { path: 'users', loadChildren: function () { return Promise.resolve().then(function () { return require('./users/users.module'); }).then(function (m) { return m.UsersModule; }); } },
    { path: 'projects', loadChildren: function () { return Promise.resolve().then(function () { return require('./projects/projects.module'); }).then(function (m) { return m.ProjectsModule; }); } },
    { path: 'log', loadChildren: function () { return Promise.resolve().then(function () { return require('./log/log.module'); }).then(function (m) { return m.LogModule; }); } },
    { path: 'projectpersonnels', loadChildren: function () { return Promise.resolve().then(function () { return require('./projectpersonnels/projectpersonnels.module'); }).then(function (m) { return m.ProjectPersonnelsModule; }); } },
    { path: 'activityassignment', loadChildren: function () { return Promise.resolve().then(function () { return require('./activityassignment/activityassignment.module'); }).then(function (m) { return m.ActivityAssignmentModule; }); } },
    { path: 'activity', loadChildren: function () { return Promise.resolve().then(function () { return require('./activity/activity.module'); }).then(function (m) { return m.activityModule; }); } },
    { path: 'dashboard', loadChildren: function () { return Promise.resolve().then(function () { return require('./dashboard/dashboard.module'); }).then(function (m) { return m.DashboardModule; }); } }, { path: '**', component: not_found_component_1.NotFoundComponent }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
