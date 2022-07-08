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
        this.dateD = 0;
        this.header = [
            { key: 'name', label: 'Name' },
            { key: 'description', label: 'Description' },
            { key: 'duration', label: 'Duration (Days)' },
            
        ];
        this.logForm = new forms_1.LogGroup({
            //users form
            name: new forms_1.FormControl('', [
                forms_1.Validators.required /**  Validators.pattern(/\s/)***/,
            ]),
            description: new forms_1.FormControl('', [forms_1.Validators.required]),
            cost: new forms_1.FormControl(Number(''), [forms_1.Validators.required]),
            startDate: new forms_1.FormControl('', [forms_1.Validators.required]),
            endDate: new forms_1.FormControl('', [forms_1.Validators.required]),
            duration: new forms_1.FormControl()
        });
    }
    LogComponent.prototype.test = function () { };
    LogComponent.prototype.onSubmit = function () {
        var _this = this;
        var s = this.logForm.value.startDate;
        var e = this.logForm.value.endDate;
        var start = new Date("" + s);
        var end = new Date("" + e);
        if (this.logForm.invalid) {
            return;
        }
        this.dateD = Number(start.getDate()) - Number(end.getDate());
        this.logForm.patchValue({
            duration: Math.abs(this.dateD)
        });
        this.http.create(this.logForm.value, 'project').subscribe(function (res) {
            _this.modal = !_this.modal;
            console.log(res);
            _this.logForm.reset();
            window.location.reload();
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
        var s = this.logForm.value.startDate;
        var e = this.logForm.value.endDate;
        var start = new Date("" + s);
        var end = new Date("" + e);
        if (!this.logForm.valid && !this.main) {
            console.log('not found');
            return;
        }
        this.dateD = Number(start.getDate()) - Number(end.getDate());
        this.logForm.patchValue({
            duration: Math.abs(this.dateD)
        });
        var a = this.http
            .update((_a = this.main) === null || _a === void 0 ? void 0 : _a._id, [this.logForm.value], 'log')
            .subscribe(function (res) { });
        this.modal2 = !this.modal2;
        window.location.reload();
    };
    LogComponent.prototype.onEdit = function (value) {
        this.modal2 = !this.modal2;
        this.logForm.setValue({
            name: value === null || value === void 0 ? void 0 : value.name,
            description: value === null || value === void 0 ? void 0 : value.description,
            cost: value === null || value === void 0 ? void 0 : value.cost,
            startDate: value === null || value === void 0 ? void 0 : value.startDate,
            endDate: value === null || value === void 0 ? void 0 : value.endDate,
            duration: value === null || value === void 0 ? void 0 : value.duration
        });
        this.main = value;
    };
    LogComponent.prototype.onDelete = function (value) {
        if (!value) {
            console.log('not found');
            return;
        } //console.log(this.http.findOne(this.projectForm.value.id) )
        this.http["delete"](value, 'project').subscribe(function (res) { });
        window.location.reload();
    };
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var a = this.http.find('log').subscribe(function (res) {
            _this.data = res;
            console.log(res);
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
