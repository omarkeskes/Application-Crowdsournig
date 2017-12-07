"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var enseignant_list_component_1 = require("./enseignant-list.component");
var etudiant_list_component_1 = require("./etudiant-list.component");
var entreprise_list_component_1 = require("./entreprise-list.component");
var enseignant_profil_component_1 = require("./enseignant-profil.component");
var etudiant_profil_component_1 = require("./etudiant-profil.component");
var etd_profil_component_1 = require("./etd-profil.component");
var ens_profil_component_1 = require("./ens-profil.component");
var etudiant_filter_pipe_1 = require("./etudiant-filter.pipe");
var enseignant_filter_pipe_1 = require("./enseignant-filter.pipe");
var entreprise_filter_pipe_1 = require("./entreprise-filter.pipe");
var entreprise_service_1 = require("./entreprise.service");
var enseignant_service_1 = require("./enseignant.service");
var etudiant_service_1 = require("./etudiant.service");
var CommunityModule = (function () {
    function CommunityModule() {
    }
    return CommunityModule;
}());
CommunityModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([
                { path: 'etudiants', component: etudiant_list_component_1.EtudiantListComponent },
                { path: 'enseignants', component: enseignant_list_component_1.EnseignantListComponent },
                { path: 'entreprises', component: entreprise_list_component_1.EntrepriseListComponent },
                { path: 'etudiant/:id', component: etudiant_profil_component_1.EtudiantProfilComponent },
                { path: 'enseignant/:id', component: enseignant_profil_component_1.EnseignantProfilComponent },
                { path: 'profil/:id', component: etd_profil_component_1.ProfilComponent },
                { path: 'mon_profil/:id', component: ens_profil_component_1.EnsProfilComponent },
            ])
        ],
        declarations: [
            enseignant_list_component_1.EnseignantListComponent,
            etudiant_list_component_1.EtudiantListComponent,
            entreprise_list_component_1.EntrepriseListComponent,
            etudiant_profil_component_1.EtudiantProfilComponent,
            enseignant_profil_component_1.EnseignantProfilComponent,
            etd_profil_component_1.ProfilComponent,
            enseignant_filter_pipe_1.EnseignantFilterPipe,
            etudiant_filter_pipe_1.EtudiantFilterPipe,
            entreprise_filter_pipe_1.EntrepriseFilterPipe,
            ens_profil_component_1.EnsProfilComponent
        ],
        providers: [
            etudiant_service_1.EtudiantService,
            enseignant_service_1.EnseignantService,
            entreprise_service_1.EntrepriseService
        ]
    })
], CommunityModule);
exports.CommunityModule = CommunityModule;
//# sourceMappingURL=community.module.js.map