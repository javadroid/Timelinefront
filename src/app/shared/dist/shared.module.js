"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var common_1 = require("@angular/common");
var modal_component_1 = require("./modal/modal.component");
var table_component_1 = require("./table/table.component");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var input_component_1 = require("./input/input.component");
var angular_material_module_module_1 = require("../angular-material-module/angular-material-module.module");
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
                forms_1.ReactiveFormsModule, input_1.MatInputModule, form_field_1.MatFormFieldModule, table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                progress_spinner_1.MatProgressSpinnerModule,
                http_1.HttpClientModule,
                angular_material_module_module_1.AngularMaterialModule,
                flex_layout_1.FlexLayoutModule
            ],
            exports: [input_component_1.InputComponent, table_component_1.TableComponent, modal_component_1.ModalComponent, input_1.MatInputModule, form_field_1.MatFormFieldModule,],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
