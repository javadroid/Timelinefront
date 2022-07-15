"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LogComponent = /** @class */ (function () {
    function LogComponent(http) {
        this.http = http;
        this.modal = false;
        this.modal2 = false;
        this.data = [];
        this.main = [];
        this.projectdata = [];
        this.usersdata = [];
        this.activitydata = [];
        this.dateD = 0;
        this.header = [
            { key: 'project', label: 'Project' },
            { key: 'activity', label: 'Activity' },
            { key: 'user', label: 'User' },
            { key: 'log', label: 'Log' },
            { key: 'reporterId', label: 'Reporter' },
            { key: 'reportedAt', label: 'ReportedAt (Date)' },
            { key: 'assignedTo', label: 'AssignedTo' },
            { key: 'dateResolved', label: 'DateResolved (Date)' },
            { key: 'response', label: 'Response' },
            { key: 'responseConfirm', label: 'ResponseConfirm' },
            { key: 'responseConfirmDate', label: 'ResponseConfirmDate (Date)' },
        ];
        this.logForm = new forms_1.FormGroup({
            //users form
            project: new forms_1.FormControl('', [forms_1.Validators.required]),
            activity: new forms_1.FormControl('', [forms_1.Validators.required]),
            user: new forms_1.FormControl('', [forms_1.Validators.required]),
            log: new forms_1.FormControl('', [forms_1.Validators.required]),
            reporterId: new forms_1.FormControl('', [forms_1.Validators.required]),
            reportedAt: new forms_1.FormControl('', [forms_1.Validators.required]),
            assignedTo: new forms_1.FormControl('', [forms_1.Validators.required]),
            dateResolved: new forms_1.FormControl('', [forms_1.Validators.required]),
            response: new forms_1.FormControl('', [forms_1.Validators.required]),
            responseConfirm: new forms_1.FormControl('', [forms_1.Validators.required]),
            responseConfirmDate: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    LogComponent.prototype.test = function () { };
    LogComponent.prototype.changeProject = function (e) {
        this.logForm.patchValue({
            project: e.target.value
        });
    };
    LogComponent.prototype.changeUsername = function (e) {
        this.logForm.patchValue({
            user: e.target.value
        });
    };
    LogComponent.prototype.changeActivity = function (e) {
        this.logForm.patchValue({
            activity: e.target.value
        });
    };
    LogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.http.create(this.logForm.value, 'log').subscribe(function (res) {
            _this.modal = !_this.modal;
            console.log(res);
            _this.logForm.reset();
            // window.location.reload();
        });
    };
    LogComponent.prototype.onClick = function () {
        this.modal = !this.modal;
    };
    LogComponent.prototype.onClick2 = function () {
        this.modal2 = !this.modal2;
    };
    LogComponent.prototype.onUpdate = function () {
        var _a;
        var a = this.http
            .update((_a = this.main) === null || _a === void 0 ? void 0 : _a._id, [this.logForm.value], 'log')
            .subscribe(function (res) { });
        this.modal2 = !this.modal2;
        window.location.reload();
    };
    LogComponent.prototype.onEdit = function (value) {
        this.modal2 = !this.modal2;
        console.log("LogForm Value", this.logForm.value);
        this.logForm.patchValue(value);
        this.logForm.setValue({
            project: value === null || value === void 0 ? void 0 : value.project,
            activity: value === null || value === void 0 ? void 0 : value.activity,
            user: value === null || value === void 0 ? void 0 : value.user,
            log: value === null || value === void 0 ? void 0 : value.log,
            reporterId: value === null || value === void 0 ? void 0 : value.reporterId,
            reportedAt: value === null || value === void 0 ? void 0 : value.reportedAt,
            assignedTo: value === null || value === void 0 ? void 0 : value.assignedTo,
            dateResolved: value === null || value === void 0 ? void 0 : value.dateResolved,
            response: value === null || value === void 0 ? void 0 : value.response,
            responseConfirm: value === null || value === void 0 ? void 0 : value.responseConfirm,
            responseConfirmDate: value === null || value === void 0 ? void 0 : value.responseConfirmDate
        });
        this.main = value;
        console.log("LogForm Value ", this.logForm.value);
    };
    LogComponent.prototype.onDelete = function (value) {
        if (!value) {
            console.log('not found');
            return;
        } //console.log(this.http.findOne(this.projectForm.value.id) )
        this.http["delete"](value, 'log').subscribe(function (res) { });
        window.location.reload();
    };
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var a = this.http.find('log').subscribe(function (res) {
            console.log(res);
            _this.data = res;
        });
        this.http.find('project').subscribe(function (res) {
            _this.projectdata = res;
        });
        this.http.find('users').subscribe(function (res) {
            _this.usersdata = res;
        });
        this.http.find('activity').subscribe(function (res) {
            _this.activitydata = res;
        });
    };
    LogComponent = __decorate([
        core_1.Component({
            selector: 'app-log',
            templateUrl: './log.component.html',
            styleUrls: ['./log.component.css']
        })
    ], LogComponent);
    return LogComponent;
}());
exports.LogComponent = LogComponent;
function log(log) {
    throw new Error('Function not implemented.');
}
