"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.activityComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var activityComponent = /** @class */ (function () {
    function activityComponent(http) {
        this.http = http;
        this.modal = false;
        this.modal2 = false;
        this.projectdata = [];
        this.data = [];
        this.main = [];
        this.dateD = 0;
        this.header = [
            { key: 'name', label: 'Name' },
            { key: 'description', label: 'Description' },
            { key: 'duration', label: 'Duration (Days)' },
        ];
        this.activityForm = new forms_1.FormGroup({
            //users form
            name: new forms_1.FormControl('', [forms_1.Validators.required]),
            description: new forms_1.FormControl('', [forms_1.Validators.required]),
            startDate: new forms_1.FormControl('', [forms_1.Validators.required]),
            endDate: new forms_1.FormControl('', [forms_1.Validators.required]),
            duration: new forms_1.FormControl()
        });
    }
    activityComponent.prototype.test = function () { };
    activityComponent.prototype.onSubmit = function () {
        var _this = this;
        var s = this.activityForm.value.startDate;
        var e = this.activityForm.value.endDate;
        var start = new Date("" + s);
        var end = new Date("" + e);
        console.log(this.activityForm.value);
        if (this.activityForm.invalid) {
            return;
        }
        this.dateD = Number(start.getDate()) - Number(end.getDate());
        this.activityForm.patchValue({
            duration: Math.abs(this.dateD)
        });
        this.http.create(this.activityForm.value, 'activity').subscribe(function (res) {
            _this.modal = !_this.modal;
            console.log(res);
            _this.activityForm.reset();
            //window.location.reload();
        });
    };
    activityComponent.prototype.onClick = function () {
        this.modal = !this.modal;
    };
    activityComponent.prototype.onClick2 = function () {
        this.modal2 = !this.modal2;
    };
    activityComponent.prototype.onUpdate = function () {
        var _a;
        var s = this.activityForm.value.startDate;
        var e = this.activityForm.value.endDate;
        var start = new Date("" + s);
        var end = new Date("" + e);
        if (!this.activityForm.valid && !this.main) {
            console.log('not found');
            return;
        }
        this.dateD = Number(start.getDate()) - Number(end.getDate());
        this.activityForm.patchValue({
            duration: Math.abs(this.dateD)
        });
        var a = this.http
            .update((_a = this.main) === null || _a === void 0 ? void 0 : _a._id, [this.activityForm.value], 'activity')
            .subscribe(function (res) { });
        this.modal2 = !this.modal2;
        //window.location.reload();
    };
    activityComponent.prototype.onEdit = function (value) {
        this.modal2 = !this.modal2;
        this.activityForm.setValue({
            name: value === null || value === void 0 ? void 0 : value.name,
            description: value === null || value === void 0 ? void 0 : value.description,
            startDate: this.formatDate(value === null || value === void 0 ? void 0 : value.startDate),
            endDate: this.formatDate(value === null || value === void 0 ? void 0 : value.endDate),
            duration: value === null || value === void 0 ? void 0 : value.duration
        });
        this.main = value;
    };
    activityComponent.prototype.onDelete = function (value) {
        if (!value) {
            console.log('not found');
            return;
        } //console.log(this.http.findOne(this.activityForm.value.id) )
        this.http["delete"](value, 'activity').subscribe(function (res) { });
        //window.location.reload();
    };
    activityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.find('activity').subscribe(function (res) {
            _this.data = res;
        });
    };
    activityComponent.prototype.formatDate = function (date) {
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
    activityComponent = __decorate([
        core_1.Component({
            selector: 'app-activity',
            templateUrl: './activity.component.html',
            styleUrls: ['./activity.component.css']
        })
    ], activityComponent);
    return activityComponent;
}());
exports.activityComponent = activityComponent;
