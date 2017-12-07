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
var EnseignantProfilComponent = (function () {
    function EnseignantProfilComponent(enseignantservice, routes) {
        var _this = this;
        this.enseignantservice = enseignantservice;
        this.routes = routes;
        this.profilMail = true;
        this.emailShow = false;
        this.enseignantShow = true;
        $("#page-wrapper").css('background', '#ffffff');
        this.routes.params.subscribe(function (params) {
            _this.param = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        console.log(this.param);
        var id = {
            "id": this.param
        };
        this.enseignantservice.getEnseignant(id).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Quote Complete'); });
    }
    EnseignantProfilComponent.prototype.ngOnChanges = function () {
        this.percentage = 40;
    };
    EnseignantProfilComponent.prototype.logData = function (data) {
        this.community = data.enseignant;
        this.experiences = data.experiences;
        this.specialites = data.specialites;
        this.email = data.email;
        console.log(this.community);
        console.log(this.experiences);
    };
    EnseignantProfilComponent.prototype.logError = function (err) {
        console.log(err);
    };
    ;
    EnseignantProfilComponent.prototype.writeMail = function () {
        this.emailShow = true;
    };
    ;
    EnseignantProfilComponent.prototype.sentMail = function () {
        this.emailShow = false;
    };
    ;
    EnseignantProfilComponent.prototype.returnMail = function () {
        this.emailShow = false;
    };
    return EnseignantProfilComponent;
}());
EnseignantProfilComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'community-profil.component.html',
        styleUrls: ['../../assets/css/profil.css']
    }),
    __metadata("design:paramtypes", [enseignant_service_1.EnseignantService, router_1.ActivatedRoute])
], EnseignantProfilComponent);
exports.EnseignantProfilComponent = EnseignantProfilComponent;
//# sourceMappingURL=enseignant-profil.component.js.map