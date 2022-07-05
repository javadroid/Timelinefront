"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TimelineApiService = void 0;
var core_1 = require("@angular/core");
var TimelineApiService = /** @class */ (function () {
    function TimelineApiService(http) {
        this.http = http;
    }
    TimelineApiService.prototype.create = function (details, rs) {
        return this.http.post('http://localhost:3000/api/' + rs, details);
    };
    TimelineApiService.prototype.update = function (_id, details, rs) {
        console.log(details);
        return this.http.patch('http://localhost:3000/api/' + rs + '/' + _id, details[0]);
    };
    TimelineApiService.prototype.findOne = function (id, rs) {
        return this.http.get('http://localhost:3000/api/' + rs + '/' + id);
    };
    TimelineApiService.prototype.find = function (rs) {
        return this.http.get('http://localhost:3000/api/' + rs + '/');
    };
    TimelineApiService.prototype["delete"] = function (id, rs) {
        return this.http["delete"]('http://localhost:3000/api/' + rs + '/' + id);
    };
    TimelineApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TimelineApiService);
    return TimelineApiService;
}());
exports.TimelineApiService = TimelineApiService;
