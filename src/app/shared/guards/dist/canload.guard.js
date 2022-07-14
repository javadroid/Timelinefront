"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CanloadGuard = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CanloadGuard = /** @class */ (function () {
    function CanloadGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    CanloadGuard.prototype.canLoad = function (route, segments) {
        return new rxjs_1.Observable(function (s) {
            s.next(false);
            s.complete();
        });
    };
    CanloadGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CanloadGuard);
    return CanloadGuard;
}());
exports.CanloadGuard = CanloadGuard;
