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
var entreprise_service_1 = require("./entreprise.service");
var EntrepriseListComponent = (function () {
    function EntrepriseListComponent(entrepriseService) {
        var _this = this;
        this.entrepriseService = entrepriseService;
        this.title = 'Entreprises';
        this.entrepriseShow = true;
        $("#page-wrapper").css('background', '#ffffff');
        console.log("started");
        this.entrepriseService.getEntreprises().subscribe(function (entreprises) { return _this.entreprises = entreprises; });
        console.log(this.entreprises);
    }
    return EntrepriseListComponent;
}());
EntrepriseListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'community-list.component.html',
        styleUrls: ['../../assets/font-awesome/css/font-awesome.min.css']
    }),
    __metadata("design:paramtypes", [entreprise_service_1.EntrepriseService])
], EntrepriseListComponent);
exports.EntrepriseListComponent = EntrepriseListComponent;
//# sourceMappingURL=entreprise-list.component.js.map