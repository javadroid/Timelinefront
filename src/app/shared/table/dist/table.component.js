"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableComponent = void 0;
var core_1 = require("@angular/core");
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.table = false;
        this.data = [];
        this.header = [];
        this.classNames = '';
        this.emitEdit = new core_1.EventEmitter();
        this.emitEdit2 = new core_1.EventEmitter();
        this.emitDelete = new core_1.EventEmitter();
    }
    TableComponent.prototype.ngOnInit = function () {
        if (this.data.length > -1) {
            return;
        }
        this.table = true;
        console.log(this.table);
    };
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "header");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "classNames");
    __decorate([
        core_1.Output()
    ], TableComponent.prototype, "emitEdit");
    __decorate([
        core_1.Output()
    ], TableComponent.prototype, "emitEdit2");
    __decorate([
        core_1.Output()
    ], TableComponent.prototype, "emitDelete");
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
