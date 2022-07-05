"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var input_component_1 = require("./input/input.component");
var modal_component_1 = require("./modal/modal.component");
var forms_1 = require("@angular/forms");
var table_component_1 = require("./table/table.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                input_component_1.InputComponent, modal_component_1.ModalComponent, table_component_1.TableComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [input_component_1.InputComponent, table_component_1.TableComponent, modal_component_1.ModalComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
