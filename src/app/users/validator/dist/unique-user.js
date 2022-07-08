"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UniqueUser = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UniqueUser = /** @class */ (function () {
    function UniqueUser(authService) {
        var _this = this;
        this.authService = authService;
        this.validate = function (control) {
            var value = control.value;
            return _this.authService.findOne(value, 'users')
                .pipe(rxjs_1.map(function (res) {
                if ((res === null || res === void 0 ? void 0 : res.length) > 0) {
                    console.log(res[0].username);
                    if (res[0].username) {
                        return { UniqueUsername: true };
                    }
                    else
                        return { badInternetConnect: true };
                }
                return null;
            }));
        };
        this.validateEmail = function (control) {
            var value = control.value;
            return _this.authService.findOneByEmail(value, 'users')
                .pipe(rxjs_1.map(function (res) {
                if ((res === null || res === void 0 ? void 0 : res.length) > 0) {
                    console.log(res[0].email);
                    if (res[0].email) {
                        return { UniqueUsername: true };
                    }
                    else
                        return { badInternetConnect: true };
                }
                return null;
            }));
        };
        this.validatePhone = function (control) {
            var value = control.value;
            return _this.authService.findOneByPhone(value, 'users')
                .pipe(rxjs_1.map(function (res) {
                if ((res === null || res === void 0 ? void 0 : res.length) > 0) {
                    console.log(res[0].phonenumber);
                    if (res[0].phonenumber) {
                        return { UniqueUsername: true };
                    }
                    else
                        return { badInternetConnect: true };
                }
                return null;
            }));
        };
    }
    UniqueUser = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UniqueUser);
    return UniqueUser;
}());
exports.UniqueUser = UniqueUser;
