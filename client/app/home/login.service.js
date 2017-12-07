"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var LoginService = (function () {
    //data : any ;
    //err : any ;
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        console.log(' Service Initializied...');
    }
    LoginService.prototype.CurrentUser = function () {
        var _this = this;
        return this.http.get('/auth/currentUser').map(function (res) { return res.json(); }).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
    };
    LoginService.prototype.Authenticate = function (data) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        //       console.log(data);
        return this.http.post('/auth', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
    };
    LoginService.prototype.logOut = function () {
        this.user = null;
        return this.http.get('/logout').map(function (res) { return res.json(); });
    };
    LoginService.prototype.Register = function (data) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this.http.post('/auth/Register', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
    };
    LoginService.prototype.logData = function (data) {
        if (data.success) {
            this.user = data.userdata;
            this.router.navigate(['/']);
        }
        else if (data.login) {
            console.log(data);
            this.user = data;
            //this.router.navigate(['/']);
        }
        console.log(data);
    };
    LoginService.prototype.logError = function (err) {
        this.router.navigate(['/auth']);
        console.log(err);
    };
    LoginService.prototype.getRequesttoJoin = function (id) {
        var data = {
            "id": id
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this.http.post('/api/idea/getjoin', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    LoginService.prototype.getNotifications = function (login) {
        var data = {
            "id": login
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this.http.post('/api/notifications/', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map