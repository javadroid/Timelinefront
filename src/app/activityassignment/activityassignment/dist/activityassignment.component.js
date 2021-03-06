"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ActivityAssignmentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ActivityAssignmentComponent = /** @class */ (function () {
    function ActivityAssignmentComponent(http) {
        this.http = http;
        this.modal = false;
        this.modal2 = false;
        this.data = [];
        this.projectdata = [];
        this.usersdata = [];
        this.activitydata = [];
        this.main = [];
        this.dateD = 0;
        this.header = [
            { key: 'project', label: 'Project' },
            { key: 'activity', label: 'Activity' },
            { key: 'user', label: 'User' },
            { key: 'duration', label: 'Duration (Days)' },
        ];
        this.activityassignmentForm = new forms_1.FormGroup({
            project: new forms_1.FormControl('', [forms_1.Validators.required]),
            activity: new forms_1.FormControl('', [forms_1.Validators.required]),
            user: new forms_1.FormControl('', [forms_1.Validators.required]),
            dateAssigned: new forms_1.FormControl('', [forms_1.Validators.required]),
            dateDone: new forms_1.FormControl('', [forms_1.Validators.required]),
            duration: new forms_1.FormControl()
        });
    }
    ActivityAssignmentComponent.prototype.test = function () { };
    ActivityAssignmentComponent.prototype.changeProject = function (e) {
        this.activityassignmentForm.patchValue({
            project: e.target.value
        });
    };
    ActivityAssignmentComponent.prototype.changeUser = function (e) {
        this.activityassignmentForm.patchValue({
            user: e.target.value
        });
    };
    ActivityAssignmentComponent.prototype.changeActivity = function (e) {
        console.log(e);
        this.activityassignmentForm.patchValue({
            activity: e.target.value
        });
    };
    ActivityAssignmentComponent.prototype.onSubmit = function () {
        var _this = this;
        var s = this.activityassignmentForm.value.dateAssigned;
        var e = this.activityassignmentForm.value.dateDone;
        var start = new Date("" + s);
        var end = new Date("" + e);
        console.log(this.activityassignmentForm.value);
        if (this.activityassignmentForm.invalid) {
            return;
        }
        this.dateD = Number(start.getDate()) - Number(end.getDate());
        this.activityassignmentForm.patchValue({
            duration: Math.abs(this.dateD)
        });
        this.http.create(this.activityassignmentForm.value, 'activityassignment').subscribe(function (res) {
            _this.modal = !_this.modal;
            console.log(res);
            _this.activityassignmentForm.reset();
            //window.location.reload();
        });
    };
    ActivityAssignmentComponent.prototype.onClick = function () {
        this.modal = !this.modal;
    };
    ActivityAssignmentComponent.prototype.onClick2 = function () {
        this.modal2 = !this.modal2;
    };
    ActivityAssignmentComponent.prototype.onUpdate = function () {
        var _a;
        var a = this.http
            .update((_a = this.main) === null || _a === void 0 ? void 0 : _a._id, [this.activityassignmentForm.value], 'activityassignment')
            .subscribe(function (_res) { });
        this.modal2 = !this.modal2;
        window.location.reload();
    };
    ActivityAssignmentComponent.prototype.onEdit = function (value) {
        console.log(value);
        this.modal2 = !this.modal2;
        this.activityassignmentForm.setValue({
            project: value === null || value === void 0 ? void 0 : value.project,
            user: value === null || value === void 0 ? void 0 : value.user,
            activity: value === null || value === void 0 ? void 0 : value.activity,
            dateAssigned: this.formatDate(value === null || value === void 0 ? void 0 : value.dateAssigned),
            dateDone: this.formatDate(value === null || value === void 0 ? void 0 : value.dateDone),
            duration: value === null || value === void 0 ? void 0 : value.duration
        });
        this.main = value;
    };
    ActivityAssignmentComponent.prototype.onDelete = function (value) {
        if (!value) {
            console.log('not found');
            return;
        } //console.log(this.http.findOne(this.projectForm.value.id) )
        this.http["delete"](value, 'activityassignment').subscribe(function (_res) { });
        window.location.reload();
    };
    ActivityAssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.find('activityassignment').subscribe(function (res) {
            //  console.log(res);
            _this.data = res;
        });
        this.http.find('project').subscribe(function (res) {
            // console.log(res);
            _this.projectdata = res;
        });
        this.http.find('users').subscribe(function (res) {
            // console.log(res);
            _this.usersdata = res;
        });
        this.http.find('activity').subscribe(function (res) {
            // console.log(res);
            _this.activitydata = res;
        });
    };
    ActivityAssignmentComponent.prototype.formatDate = function (date) {
        if (!date) {
            return null;
        }
        // eslint-disable-next-line prefer-const
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), 
        // eslint-disable-next-line prefer-const
        year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    };
    ActivityAssignmentComponent = __decorate([
        core_1.Component({
            selector: 'app-activityassignment',
            templateUrl: './activityassignment.component.html',
            styleUrls: ['./activityassignment.component.css']
        })
    ], ActivityAssignmentComponent);
    return ActivityAssignmentComponent;
}());
exports.ActivityAssignmentComponent = ActivityAssignmentComponent;
