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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var EntrepriseService = (function () {
    function EntrepriseService(_http) {
        this._http = _http;
    }
    EntrepriseService.prototype.getEntreprises = function () {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.get('http://localhost:3000/api/entreprises').map(function (res) { return res.json(); });
    };
    EntrepriseService.prototype.logData = function (data) {
        if (data.success) {
            console.log('test');
        }
    };
    EntrepriseService.prototype.logError = function (err) {
        console.log(err);
    };
    EntrepriseService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return EntrepriseService;
}());
EntrepriseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EntrepriseService);
exports.EntrepriseService = EntrepriseService;
//# sourceMappingURL=entreprise.service.js.map