"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.data = [];
        this.rese = [];
        this.projectdata = [];
        this.activitydata = [];
        this.assigndata = [];
        this.test = [];
        this.act = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.syncProjectActivity();
    };
    DashboardComponent.prototype.onSelect = function (d) {
        this.rese = d.rese;
        console.log("first", d);
        this.act = !this.act;
    };
    DashboardComponent.prototype.syncProjectActivity = function () {
        var _this = this;
        this.http.find('project').subscribe(function (res) {
            // console.log(res)
            _this.data = res;
            _this.http.find('activity').subscribe(function (activity) {
                var _a;
                var _loop_1 = function (i) {
                    // console.log('length data',res[i]._id );
                    _this.http
                        .findOneActivityProject((_a = res[i]) === null || _a === void 0 ? void 0 : _a._id, 'activity')
                        .subscribe(function (rese) {
                        Object.assign(res[i], { rese: rese });
                        _this.data = res;
                        // console.log(this.data)
                    });
                };
                for (var i = 0; i < activity.length; i++) {
                    _loop_1(i);
                }
            });
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
