"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(http) {
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
        this.projectForm = new forms_1.FormGroup({
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
    ProjectsComponent.prototype.test = function () { };
    ProjectsComponent.prototype.onSubmit = function () {
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
    ProjectsComponent.prototype.onClick = function () {
        this.modal = !this.modal;
    };
    ProjectsComponent.prototype.onClick2 = function () {
        this.modal2 = !this.modal2;
    };
    ProjectsComponent.prototype.onUpdate = function () {
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
        var a = this.http
            .update((_a = this.main) === null || _a === void 0 ? void 0 : _a._id, [this.projectForm.value], 'project')
            .subscribe(function (res) { });
        this.modal2 = !this.modal2;
        window.location.reload();
    };
    ProjectsComponent.prototype.onEdit = function (value) {
        this.modal2 = !this.modal2;
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
    ProjectsComponent.prototype.onDelete = function (value) {
        if (!value) {
            console.log('not found');
            return;
        } //console.log(this.http.findOne(this.projectForm.value.id) )
        this.http["delete"](value, 'project').subscribe(function (res) { });
        window.location.reload();
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var a = this.http.find('project').subscribe(function (res) {
            _this.data = res;
        });
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.css']
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
