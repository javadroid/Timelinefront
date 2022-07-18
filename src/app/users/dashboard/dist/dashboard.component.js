"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.modal = false;
        this.dateD = 0;
        this.modal2 = false;
        this.main = [];
        this.data = [];
        this.rese = [];
        this.projectdata = [];
        this.activitydata = [];
        this.assigndata = [];
        this.test = [];
        this.act = false;
        this.projectForm = new forms_1.FormGroup({
            //users form
            name: new forms_1.FormControl('', [forms_1.Validators.required]),
            description: new forms_1.FormControl('', [forms_1.Validators.required]),
            cost: new forms_1.FormControl(Number(''), [forms_1.Validators.required]),
            startDate: new forms_1.FormControl('', [forms_1.Validators.required]),
            endDate: new forms_1.FormControl('', [forms_1.Validators.required]),
            duration: new forms_1.FormControl()
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.projectForm.value.cost;
        this.syncProjectActivity();
    };
    DashboardComponent.prototype.onclick = function () {
        this.modal = !this.modal;
    };
    DashboardComponent.prototype.onclick2 = function () {
        this.modal2 = !this.modal2;
    };
    DashboardComponent.prototype.onEdit = function (value) {
        this.modal = !this.modal;
        this.projectForm.setValue({
            name: value === null || value === void 0 ? void 0 : value.name,
            description: value === null || value === void 0 ? void 0 : value.description,
            cost: value === null || value === void 0 ? void 0 : value.cost,
            startDate: value === null || value === void 0 ? void 0 : value.startDate,
            endDate: value === null || value === void 0 ? void 0 : value.endDate,
            duration: value === null || value === void 0 ? void 0 : value.duration
        });
        this.main = value;
    };
    DashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        var s = this.projectForm.value.startDate;
        var e = this.projectForm.value.endDate;
        var start = new Date("" + s);
        var end = new Date("" + e);
        if (this.projectForm.invalid) {
            return;
        }
        this.dateD = Number(start.getDate()) - Number(end.getDate());
        this.projectForm.patchValue({
            duration: Math.abs(this.dateD)
        });
        this.http.create(this.projectForm.value, 'project').subscribe(function (res) {
            _this.modal = !_this.modal;
            console.log(res);
            _this.projectForm.reset();
            window.location.reload();
        });
    };
    DashboardComponent.prototype.onUpdate = function () {
        var _a;
        var s = this.projectForm.value.startDate;
        var e = this.projectForm.value.endDate;
        var start = new Date("" + s);
        var end = new Date("" + e);
        if (!this.projectForm.valid && !this.main) {
            console.log('not found');
            return;
        }
        this.dateD = Number(start.getDate()) - Number(end.getDate());
        this.projectForm.patchValue({
            duration: Math.abs(this.dateD)
        });
        this.http
            .update((_a = this.main) === null || _a === void 0 ? void 0 : _a._id, [this.projectForm.value], 'project')
            .subscribe(function (res) { console.log(res); });
        this.modal = !this.modal;
        // window.location.reload();
    };
    DashboardComponent.prototype.onDelete = function (value) {
        var _this = this;
        if (!value) {
            console.log('not found');
            return;
        } //console.log(this.http.findOne(this.projectForm.value.id) )
        this.http["delete"](value, 'project').subscribe(function (res) { });
        // window.location.reload();
        this.http.findOneActivityProject(value, 'activity').subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                // console.log(res[i]._id)
                _this.http["delete"](res[i]._id, 'activity').subscribe(function (res) { });
            }
        });
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
                        console.log(_this.data);
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
