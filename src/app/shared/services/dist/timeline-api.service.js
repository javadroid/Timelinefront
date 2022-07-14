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
var moment = require("moment");
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
        var _this = this;
        return this.http.get('http://localhost:3000/api/users/profile').pipe(rxjs_1.tap(function (res) {
            _this.signedIn$.next(res.authenticated);
            console.log(res.authenticated);
        }), rxjs_1.catchError(function () { return ' authentication:false'; }));
    };
    TimelineApiService.prototype.create = function (details, rs) {
        return this.http.post('http://localhost:3000/api/' + rs, details).pipe(rxjs_1.tap(function () {
        }));
    };
    TimelineApiService.prototype.register = function (details, rs) {
        var _this = this;
        return this.http.post('http://localhost:3000/api/' + rs, details).pipe(rxjs_1.tap(function () {
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
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
    };
    TimelineApiService.prototype.setLocalStorage = function (res) {
        var expires = moment().add(res.expiresIn);
        localStorage.setItem('token', res.token);
        localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
    };
    TimelineApiService.prototype.getExpiration = function () {
        var expiration = localStorage.getItem('expires');
        if (expiration) {
            var expiresAt = JSON.parse(expiration);
            return moment(expiresAt);
        }
        return;
    };
    TimelineApiService.prototype.isLoggedIn = function () {
        return moment().isBefore(this.getExpiration());
    };
    TimelineApiService.prototype.isLoggedOut = function () {
        return !this.isLoggedIn;
    };
    TimelineApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TimelineApiService);
    return TimelineApiService;
}());
exports.TimelineApiService = TimelineApiService;
