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
var router_1 = require("@angular/router");
var etudiant_service_1 = require("./etudiant.service");
var ProfilComponent = (function () {
    function ProfilComponent(etudiantservice, routes) {
        var _this = this;
        this.etudiantservice = etudiantservice;
        this.routes = routes;
        this.profil = true;
        this.etudiantShow = true;
        this.modif = false;
        this.descriptionEdit = false;
        this.experienceAdd = false;
        this.competenceAdd = false;
        this.diplomeAdd = false;
        this.routes.params.subscribe(function (params) {
            _this.param = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        console.log(this.param);
        var id = {
            "id": this.param
        };
        this.etudiantservice.getStudent(id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
    }
    ProfilComponent.prototype.editEtd = function () {
        this.modif = true;
    };
    ProfilComponent.prototype.checkEtd = function () {
        var _this = this;
        this.etudiantservice.editEtd(this.community.id, this.nomEtd, this.prenom, this.classe, this.tel, this.adresse).subscribe(function (data) {
            _this.etudiantservice.getStudent(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
        this.modif = false;
    };
    ProfilComponent.prototype.returnEtd = function () {
        this.modif = false;
    };
    ProfilComponent.prototype.editDescription = function () {
        this.descriptionEdit = true;
    };
    ProfilComponent.prototype.checkDescription = function () {
        var _this = this;
        var id = this.community.id;
        var des = this.description;
        this.etudiantservice.editDescription(id, des).subscribe(function (data) {
            _this.etudiantservice.getStudent(id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
        this.community.description = this.description;
        this.descriptionEdit = false;
    };
    ProfilComponent.prototype.returnDescription = function () {
        this.descriptionEdit = false;
    };
    ProfilComponent.prototype.addExperience = function () {
        this.experienceAdd = true;
    };
    ProfilComponent.prototype.checkExperience = function () {
        var _this = this;
        this.etudiantservice.addExperience(this.community.id, this.titreExp, this.dateDeb, this.dateFin, this.des).subscribe(function (data) {
            _this.etudiantservice.getStudent(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
        this.experienceAdd = false;
    };
    ProfilComponent.prototype.returnExperience = function () {
        this.experienceAdd = false;
    };
    ProfilComponent.prototype.deleteExperience = function (id) {
        var _this = this;
        this.etudiantservice.deleteExperience(id).subscribe(function (data) {
            _this.etudiantservice.getStudent(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
    };
    ProfilComponent.prototype.addCompetence = function () {
        this.competenceAdd = true;
    };
    ProfilComponent.prototype.checkCompetence = function () {
        var _this = this;
        this.etudiantservice.addCompetence(this.community.id, this.nom, this.niveau).subscribe(function (data) {
            _this.etudiantservice.getStudent(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
        this.competenceAdd = false;
    };
    ProfilComponent.prototype.returnCompetence = function () {
        this.competenceAdd = false;
    };
    ProfilComponent.prototype.addDiplome = function () {
        this.diplomeAdd = true;
    };
    ProfilComponent.prototype.checkDiplome = function () {
        var _this = this;
        this.etudiantservice.addDiplome(this.community.id, this.nomDip, this.annee, this.ecole).subscribe(function (data) {
            _this.etudiantservice.getStudent(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
        this.diplomeAdd = false;
    };
    ProfilComponent.prototype.returnDiplome = function () {
        this.diplomeAdd = false;
    };
    ProfilComponent.prototype.logData = function (data) {
        this.community = data.etudiant;
        this.description = this.community.description;
        this.nomEtd = this.community.nom;
        this.prenom = this.community.prenom;
        this.classe = this.community.classe;
        this.adresse = this.community.adresse;
        this.tel = this.community.tel;
        this.experiences = data.experiences;
        this.competences = data.competences;
        this.diplomes = data.diplomes;
        this.email = data.email;
        console.log(this.community);
        console.log(this.experiences);
        console.log(this.competences);
    };
    ProfilComponent.prototype.logError = function (err) {
        console.log(err);
    };
    ;
    return ProfilComponent;
}());
ProfilComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'community-profil.component.html',
        styleUrls: ['../../assets/css/profil.css']
    }),
    __metadata("design:paramtypes", [etudiant_service_1.EtudiantService, router_1.ActivatedRoute])
], ProfilComponent);
exports.ProfilComponent = ProfilComponent;
//# sourceMappingURL=profil.component.js.map