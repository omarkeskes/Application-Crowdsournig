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
var enseignant_service_1 = require("./enseignant.service");
var EnseignantListComponent = (function () {
    function EnseignantListComponent(enseignantsservice) {
        this.enseignantsservice = enseignantsservice;
        this.title = 'Enseignants';
        this.enseignantShow = true;
        $("#page-wrapper").css('background', '#ffffff');
        console.log("started");
        //this.enseignantsservice.getEnseignants().subscribe(enseignants => this.communities = enseignants);
        this.communities = this.enseignantsservice.enseignants; /* ;}else {
        console.log(this.communities);*/
    }
    return EnseignantListComponent;
}());
EnseignantListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'community-list.component.html',
        styleUrls: ['../../assets/css/round-about.css']
    }),
    __metadata("design:paramtypes", [enseignant_service_1.EnseignantService])
], EnseignantListComponent);
exports.EnseignantListComponent = EnseignantListComponent;
//# sourceMappingURL=enseignant-list.component.js.map