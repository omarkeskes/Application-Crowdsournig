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
var EnseignantService = (function () {
    function EnseignantService(_http) {
        this._http = _http;
        this.getEnseignants();
    }
    EnseignantService.prototype.getEnseignants = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.get('http://localhost:3000/api/enseignants').map(function (res) { return res.json(); }).subscribe(function (data) { _this.logdataEnseignants(data); });
    };
    EnseignantService.prototype.logdataEnseignants = function (data) {
        console.log(data);
        this.enseignants = data;
    };
    EnseignantService.prototype.getEnseignant = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/profileEnseignant', JSON.stringify(id), { headers: headers }).map(function (res) { return res.json(); });
    };
    EnseignantService.prototype.editEns = function (id, nom, prenom, profession) {
        var data = {
            "id": id,
            "nom": nom,
            "prenom": prenom,
            "profession": profession
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/editEns', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EnseignantService.prototype.editDescription = function (id, des) {
        var data = {
            "id": id,
            "des": des
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/description', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EnseignantService.prototype.addExperience = function (id, titre, dateDeb, dateFin, des) {
        var data = {
            "id": id,
            "des": des,
            "titre": titre,
            "dateDeb": dateDeb,
            "dateFin": dateFin
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/experience', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EnseignantService.prototype.deleteExperience = function (id) {
        var data = { "id": id };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/deleteExperience', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EnseignantService.prototype.addSpecialite = function (id, nom) {
        var data = {
            "id": id,
            "nom": nom
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/mon_profil/specialite', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EnseignantService.prototype.logData = function (data) {
        if (data.success) {
            console.log('test');
        }
    };
    EnseignantService.prototype.logError = function (err) {
        console.log(err);
    };
    EnseignantService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return EnseignantService;
}());
EnseignantService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EnseignantService);
exports.EnseignantService = EnseignantService;
//# sourceMappingURL=enseignant.service.js.map