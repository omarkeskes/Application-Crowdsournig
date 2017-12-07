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
var etudiant_service_1 = require("./etudiant.service");
var EtudiantListComponent = (function () {
    function EtudiantListComponent(etudiantservice) {
        this.etudiantservice = etudiantservice;
        this.title = 'Etudiants';
        this.etudiantShow = true;
        $("#page-wrapper").css('background', '#ffffff');
        console.log("started");
        //this.etudiantservice.getStudents().subscribe(students => this.communities = students);
        /*var x = setInterval(()=>{
            if(!this.communities){*/
        this.communities = this.etudiantservice.students;
        /*}else {
            console.log(this.communities);
            clearInterval(x)
    }
    },100)
    */
    }
    return EtudiantListComponent;
}());
EtudiantListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'community-list.component.html',
        styleUrls: ['../../assets/css/round-about.css']
    }),
    __metadata("design:paramtypes", [etudiant_service_1.EtudiantService])
], EtudiantListComponent);
exports.EtudiantListComponent = EtudiantListComponent;
//# sourceMappingURL=etudiant-list.component.js.map