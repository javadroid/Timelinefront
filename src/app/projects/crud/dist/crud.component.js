"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CrudComponent = void 0;
var core_1 = require("@angular/core");
var CrudComponent = /** @class */ (function () {
    function CrudComponent(el) {
        this.el = el;
        this.close = new core_1.EventEmitter();
        // console.log(el.nativeElement)
    }
    CrudComponent.prototype.ngOnInit = function () {
        document.body.appendChild(this.el.nativeElement);
    };
    CrudComponent.prototype.ngOnDestroy = function () {
        this.el.nativeElement.remove();
    };
    CrudComponent.prototype.onCloseClick = function () {
        this.close.emit();
    };
    __decorate([
        core_1.Output()
    ], CrudComponent.prototype, "close");
    CrudComponent = __decorate([
        core_1.Component({
            selector: 'app-crud',
            templateUrl: './crud.component.html',
            styleUrls: ['./crud.component.css']
        })
    ], CrudComponent);
    return CrudComponent;
}());
exports.CrudComponent = CrudComponent;
