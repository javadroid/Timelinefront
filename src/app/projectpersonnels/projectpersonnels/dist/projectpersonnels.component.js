"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectPersonnelsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ProjectPersonnelsComponent = /** @class */ (function () {
    function ProjectPersonnelsComponent(http) {
        this.http = http;
        this.modal = false;
        this.modal2 = false;
        this.data = [];
        this.main = [];
        this.dateD = 0;
        this.header = [
            { key: 'Personneltype', label: 'PersonnelType' },
        ];
        this.projectpersonnelsForm = new forms_1.FormGroup({
            //users form
            Personneltype: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    ProjectPersonnelsComponent.prototype.test = function () { };
    ProjectPersonnelsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.http.create(this.projectpersonnelsForm.value, 'project-personnels').subscribe(function (res) {
            _this.modal = !_this.modal;
            console.log(res);
            _this.projectpersonnelsForm.reset();
        });
    };
    ProjectPersonnelsComponent.prototype.onClick = function () {
        this.modal = !this.modal;
    };
    ProjectPersonnelsComponent.prototype.onClick2 = function () {
        this.modal2 = !this.modal2;
    };
    ProjectPersonnelsComponent.prototype.onUpdate = function () {
        var _a;
        var a = this.http
            .update((_a = this.main) === null || _a === void 0 ? void 0 : _a._id, [this.projectpersonnelsForm.value], 'project-personnels')
            .subscribe(function (_res) { });
        this.modal2 = !this.modal2;
    };
    ProjectPersonnelsComponent.prototype.onEdit = function (value) {
        this.modal2 = !this.modal2;
        this.projectpersonnelsForm.setValue({
            Personneltype: value === null || value === void 0 ? void 0 : value.Personneltype
        });
        this.main = value;
    };
    ProjectPersonnelsComponent.prototype.onDelete = function (value) {
        if (!value) {
            console.log('not found');
            return;
        } //console.log(this.http.findOne(this.projectForm.value.id) )
        this.http["delete"](value, 'project-personnels').subscribe(function (_res) { });
    };
    ProjectPersonnelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var a = this.http.find('project-personnels').subscribe(function (res) {
            _this.data = res;
        });
    };
    ProjectPersonnelsComponent = __decorate([
        core_1.Component({
            selector: 'app-projectpersonnels',
            templateUrl: './projectpersonnels.component.html',
            styleUrls: ['./projectpersonnels.component.css']
        })
    ], ProjectPersonnelsComponent);
    return ProjectPersonnelsComponent;
}());
exports.ProjectPersonnelsComponent = ProjectPersonnelsComponent;
