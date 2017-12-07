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
var platform_browser_1 = require("@angular/platform-browser");
var angular2_moment_1 = require("angular2-moment");
var forms_1 = require("@angular/forms");
var idea_list_component_1 = require("./idea-list.component");
var idea_detail_component_1 = require("./idea-detail.component");
var idea_new_component_1 = require("./idea-new.component");
var historique_idea_component_1 = require("./historique-idea.component");
var idea_service_1 = require("./idea.service");
var IdeaModule = (function () {
    function IdeaModule() {
    }
    return IdeaModule;
}());
IdeaModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, angular2_moment_1.MomentModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'ideas', component: idea_list_component_1.IdeaListComponent },
                { path: 'idea/:id', component: idea_detail_component_1.IdeaDetailComponent },
                { path: 'new', component: idea_new_component_1.IdeaNewComponent },
                { path: 'historique', component: historique_idea_component_1.HistoriqueIdeaComponent }
            ])
        ],
        declarations: [
            idea_list_component_1.IdeaListComponent,
            idea_detail_component_1.IdeaDetailComponent,
            idea_new_component_1.IdeaNewComponent,
            historique_idea_component_1.HistoriqueIdeaComponent
        ],
        providers: [idea_service_1.IdeaService]
    })
], IdeaModule);
exports.IdeaModule = IdeaModule;
//# sourceMappingURL=idea.module.js.map