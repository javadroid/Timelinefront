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
var rxjs_1 = require("rxjs");
var TimelineApiService = /** @class */ (function () {
    function TimelineApiService(http) {
        this.http = http;
        this.signedIn$ = new rxjs_1.BehaviorSubject(false);
    }
    TimelineApiService.prototype.usernammeAvailable = function (username) {
        return this.http.get('http://localhost:3000/api/users/' +
            username);
    };
    TimelineApiService.prototype.find = function (rs) {
        return this.http.get('http://localhost:3000/api/' + rs + '/');
    };
    TimelineApiService.prototype.findOne = function (id, rs) {
        return this.http.get('http://localhost:3000/api/' + rs + '/username/' + id);
    };
    TimelineApiService.prototype.findOneByPhone = function (id, rs) {
        return this.http.get('http://localhost:3000/api/' + rs + '/phonenumber/' + id);
    };
    TimelineApiService.prototype.findOneByEmail = function (id, rs) {
        return this.http.get('http://localhost:3000/api/' + rs + '/email/' + id);
    };
    TimelineApiService.prototype.update = function (_id, details, rs) {
        console.log(details);
        return this.http.patch('http://localhost:3000/api/' + rs + '/' + _id, details[0]);
    };
    TimelineApiService.prototype["delete"] = function (id, rs) {
        return this.http["delete"]('http://localhost:3000/api/' + rs + '/' + id);
    };
    TimelineApiService.prototype.checkAuth = function () {
        return this.http.get('http://localhost:3000/api/users/profile').pipe(rxjs_1.tap(function (res) {
            // this.signedIn$.next(authenticated)
            console.log(res);
        }));
    };
    TimelineApiService.prototype.create = function (details, rs) {
        var _this = this;
        return this.http.post('http://localhost:3000/api/' + rs, details, { withCredentials: true }).pipe(rxjs_1.tap(function () {
            _this.signedIn$.next(true);
        }));
    };
    TimelineApiService.prototype.signIn = function (details) {
        var _this = this;
        return this.http.post('http://localhost:3000/api/users/login', details).pipe(rxjs_1.tap(function () {
            _this.signedIn$.next(true);
        }));
    };
    TimelineApiService.prototype.signOut = function () {
        var _this = this;
        return this.http.post('http://localhost:3000/api/users/signout', {}).pipe(rxjs_1.tap(function () {
            _this.signedIn$.next(false);
        }));
    };
    TimelineApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TimelineApiService);
    return TimelineApiService;
}());
exports.TimelineApiService = TimelineApiService;
