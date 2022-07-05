"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.control = new forms_1.FormControl;
        this.label = '';
        this.type = '';
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.showErrors = function () {
        var _a = this.control, errors = _a.errors, touched = _a.touched, dirty = _a.dirty;
        return errors && touched && dirty;
    };
    __decorate([
        core_1.Input()
    ], InputComponent.prototype, "control");
    __decorate([
        core_1.Input()
    ], InputComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], InputComponent.prototype, "type");
    InputComponent = __decorate([
        core_1.Component({
            selector: 'app-input',
            templateUrl: './input.component.html',
            styleUrls: ['./input.component.css']
        })
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
