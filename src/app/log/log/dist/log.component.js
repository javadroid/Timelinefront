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
        this.dateD = 0;
        this.header = [
            { key: 'projectId', label: 'Project' },
            { key: 'ActivityId', label: 'Activity' },
            { key: 'UserId', label: 'User' },
            { key: 'Bug', label: 'Bug' },
            { key: 'ReporterId', label: 'Reporter' },
            { key: 'ReportedAt', label: 'ReportedAt (Date)' },
            { key: 'AssignedTo', label: 'AssignedTo' },
            { key: 'DateResolved', label: 'DateResolved (Date)' },
            { key: 'Response', label: 'Response' },
            { key: 'ResponseConfirm', label: 'ResponseConfirm' },
            { key: 'ResponseConfirmDate', label: 'ResponseConfirmDate (Date)' },
        ];
        this.logForm = new forms_1.FormGroup({
            //users form
            projectId: new forms_1.FormControl('', [forms_1.Validators.required]),
            ActivityId: new forms_1.FormControl('', [forms_1.Validators.required]),
            UserId: new forms_1.FormControl('', [forms_1.Validators.required]),
            Bug: new forms_1.FormControl('', [forms_1.Validators.required]),
            ReporterId: new forms_1.FormControl('', [forms_1.Validators.required]),
            ReportedAt: new forms_1.FormControl('', [forms_1.Validators.required]),
            AssignedTo: new forms_1.FormControl('', [forms_1.Validators.required]),
            DateResolved: new forms_1.FormControl('', [forms_1.Validators.required]),
            Response: new forms_1.FormControl('', [forms_1.Validators.required]),
            ResponseConfirm: new forms_1.FormControl('', [forms_1.Validators.required]),
            ResponseConfirmDate: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    LogComponent.prototype.test = function () { };
    LogComponent.prototype.changeProject = function (e) {
        this.logForm.patchValue({
            projectId: e.target.value
        });
    };
    LogComponent.prototype.changeUsername = function (e) {
        this.logForm.patchValue({
            UserId: e.target.value
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
            projectId: value === null || value === void 0 ? void 0 : value.projectId,
            ActivityId: value === null || value === void 0 ? void 0 : value.ActivityId,
            UserId: value === null || value === void 0 ? void 0 : value.UserId,
            Bug: value === null || value === void 0 ? void 0 : value.Bug,
            ReporterId: value === null || value === void 0 ? void 0 : value.ReporterId,
            ReportedAt: value === null || value === void 0 ? void 0 : value.ReportedAt,
            AssignedTo: value === null || value === void 0 ? void 0 : value.AssignedTo,
            DateResolved: value === null || value === void 0 ? void 0 : value.DateResolved,
            Response: value === null || value === void 0 ? void 0 : value.Response,
            ResponseConfirm: value === null || value === void 0 ? void 0 : value.ResponseConfirm,
            ResponseConfirmDate: value === null || value === void 0 ? void 0 : value.ResponseConfirmDate
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
            _this.data = res;
        });
        this.http.find('project').subscribe(function (res) {
            _this.projectdata = res;
        });
        this.http.find('users').subscribe(function (res) {
            _this.usersdata = res;
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
