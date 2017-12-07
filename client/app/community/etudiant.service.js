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
var EtudiantService = (function () {
    function EtudiantService(_http) {
        this._http = _http;
        this.getStudents();
    }
    EtudiantService.prototype.getStudents = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.get('http://localhost:3000/api/students').map(function (res) { return res.json(); }).subscribe(function (data) { _this.logDataStudents(data); });
    };
    EtudiantService.prototype.getStudent = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/profileStudent', JSON.stringify(id), { headers: headers }).map(function (res) { return res.json(); });
    };
    EtudiantService.prototype.editEtd = function (id, nom, prenom, classe, tel, adresse) {
        var data = {
            "id": id,
            "nom": nom,
            "prenom": prenom,
            "classe": classe,
            "tel": tel,
            "adresse": adresse
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/profil/editEtd', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EtudiantService.prototype.editDescription = function (id, des) {
        var data = {
            "id": id,
            "des": des
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/profil/description', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EtudiantService.prototype.addExperience = function (id, titre, dateDeb, dateFin, des) {
        var data = {
            "id": id,
            "des": des,
            "titre": titre,
            "dateDeb": dateDeb,
            "dateFin": dateFin
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/profil/experience', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EtudiantService.prototype.deleteExperience = function (id) {
        var data = { "id": id };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/profil/deleteExperience', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EtudiantService.prototype.addCompetence = function (id, nom, niveau) {
        var data = {
            "id": id,
            "nom": nom,
            "niveau": niveau
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/profil/competence', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EtudiantService.prototype.addDiplome = function (id, nom, annee, ecole) {
        var data = {
            "id": id,
            "nom": nom,
            "annee": annee,
            "ecole": ecole
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/profil/diplome', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    EtudiantService.prototype.logDataStudents = function (data) {
        console.log(data);
        this.students = data;
    };
    EtudiantService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return EtudiantService;
}());
EtudiantService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EtudiantService);
exports.EtudiantService = EtudiantService;
//# sourceMappingURL=etudiant.service.js.map