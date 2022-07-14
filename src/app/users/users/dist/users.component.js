"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, unique, router) {
        this.http = http;
        this.unique = unique;
        this.router = router;
        this.data = [];
        this.Roles = ['Admin', 'Lead', 'User'];
        this.timeFrom = new forms_1.FormGroup({
            //users form
            username: new forms_1.FormControl('', [forms_1.Validators.required], [this.unique.validate]),
            personnelType: new forms_1.FormControl('', [forms_1.Validators.required,]),
            phonenumber: new forms_1.FormControl(Number(''), [forms_1.Validators.required,], [this.unique.validatePhone]),
            email: new forms_1.FormControl('', [forms_1.Validators.required,], [this.unique.validateEmail]),
            gender: new forms_1.FormControl('', [forms_1.Validators.required]),
            address: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required]),
            image: new forms_1.FormControl(''),
            id: new forms_1.FormControl('')
        });
    }
    UsersComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.timeFrom.value) {
            return;
        }
        this.http.register(this.timeFrom.value, 'users').subscribe(function (res) {
            console.log(res);
            _this.timeFrom.reset();
            _this.router.navigate(['/login']);
        });
    };
    UsersComponent.prototype.rest = function () {
        this.timeFrom.reset();
    };
    UsersComponent.prototype.find = function () {
        var _this = this;
        //console.log(this.http.findOne(this.timeFrom.value.id) )
        var a = this.http.find('users').subscribe(function (res) {
            console.log(res);
            _this.data = res;
        });
    };
    UsersComponent.prototype.findOne = function () {
        var _this = this;
        if (!this.timeFrom.value.username) {
            console.log(this.timeFrom.value.username);
            console.log("not found");
            return;
        } //console.log((this.timeFrom.value.id) )
        var a = this.http.findOne(this.timeFrom.value.username, 'users').subscribe(function (res) {
            console.log(res);
            _this.timeFrom.setValue({
                address: res[0].address,
                email: res[0].email,
                gender: res[0].gender,
                image: res[0].image,
                password: res[0].password,
                personnelType: res[0].personnelType,
                phonenumber: res[0].phonenumber,
                username: res[0].username,
                id: res[0]._id
            });
        });
    };
    UsersComponent.prototype.update = function () {
        if (!this.timeFrom.value.id) {
            console.log("not found");
            return;
        } //console.log(this.http.findOne(this.timeFrom.value.id) )
        var a = this.http.update(this.timeFrom.value.id, ([this.timeFrom.value]), 'users').subscribe(function (res) {
            console.log(res);
        });
    };
    UsersComponent.prototype["delete"] = function () {
        if (!this.timeFrom.value.id) {
            console.log("not found");
            return;
        } //console.log(this.http.findOne(this.timeFrom.value.id) )
        var a = this.http["delete"](this.timeFrom.value.id, 'users').subscribe(function (res) {
            console.log(res);
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
