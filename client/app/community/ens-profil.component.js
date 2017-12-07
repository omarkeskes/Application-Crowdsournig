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
var enseignant_service_1 = require("./enseignant.service");
var EnsProfilComponent = (function () {
    function EnsProfilComponent(enseignantservice, routes) {
        var _this = this;
        this.enseignantservice = enseignantservice;
        this.routes = routes;
        this.profilMail = false;
        this.enseignantShow = true;
        this.profil = true;
        this.modif = false;
        this.descriptionEdit = false;
        this.experienceAdd = false;
        this.specAdd = false;
        this.routes.params.subscribe(function (params) {
            _this.param = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        $("#page-wrapper").css('background', '#ffffff');
        console.log(this.param);
        var id = {
            "id": this.param
        };
        this.enseignantservice.getEnseignant(id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
    }
    EnsProfilComponent.prototype.ngOnChanges = function () {
        this.percentage = 40;
    };
    EnsProfilComponent.prototype.editEtd = function () {
        this.modif = true;
    };
    EnsProfilComponent.prototype.checkEtd = function () {
        var _this = this;
        this.enseignantservice.editEns(this.community.id, this.community.nom, this.community.prenom, this.community.profession).subscribe(function (data) {
            _this.enseignantservice.getEnseignant(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
        this.modif = false;
    };
    EnsProfilComponent.prototype.returnEtd = function () {
        this.modif = false;
    };
    EnsProfilComponent.prototype.editDescription = function () {
        this.descriptionEdit = true;
    };
    EnsProfilComponent.prototype.checkDescription = function () {
        var _this = this;
        this.enseignantservice.editDescription(this.community.id, this.community.description).subscribe(function (data) {
            _this.enseignantservice.getEnseignant(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
        this.descriptionEdit = false;
    };
    EnsProfilComponent.prototype.returnDescription = function () {
        this.descriptionEdit = false;
    };
    EnsProfilComponent.prototype.addExperience = function () {
        this.experienceAdd = true;
    };
    EnsProfilComponent.prototype.checkExperience = function () {
        var _this = this;
        this.enseignantservice.addExperience(this.community.id, this.titreExp, this.dateDeb, this.dateFin, this.des).subscribe(function (data) {
            _this.enseignantservice.getEnseignant(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
        this.experienceAdd = false;
    };
    EnsProfilComponent.prototype.returnExperience = function () {
        this.experienceAdd = false;
    };
    EnsProfilComponent.prototype.deleteExperience = function (id) {
        var _this = this;
        this.enseignantservice.deleteExperience(id).subscribe(function (data) {
            _this.enseignantservice.getEnseignant(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
    };
    EnsProfilComponent.prototype.addSpec = function () {
        this.specAdd = true;
    };
    EnsProfilComponent.prototype.checkSpec = function () {
        var _this = this;
        this.enseignantservice.addSpecialite(this.community.id, this.nom).subscribe(function (data) {
            _this.enseignantservice.getEnseignant(_this.community.id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
        }, function (err) { console.log(err); }, function () { });
        this.specAdd = false;
    };
    EnsProfilComponent.prototype.returnSpec = function () {
        this.specAdd = false;
    };
    EnsProfilComponent.prototype.logData = function (data) {
        this.community = data.enseignant;
        this.experiences = data.experiences;
        this.specialites = data.specialites;
        this.email = data.email;
        console.log(this.community);
        console.log(this.experiences);
    };
    EnsProfilComponent.prototype.logError = function (err) {
        console.log(err);
    };
    ;
    return EnsProfilComponent;
}());
EnsProfilComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'community-profil.component.html',
        styleUrls: ['../../assets/css/profil.css']
    }),
    __metadata("design:paramtypes", [enseignant_service_1.EnseignantService, router_1.ActivatedRoute])
], EnsProfilComponent);
exports.EnsProfilComponent = EnsProfilComponent;
//# sourceMappingURL=ens-profil.component.js.map