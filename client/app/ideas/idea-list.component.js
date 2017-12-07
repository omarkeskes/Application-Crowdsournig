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
var idea_service_1 = require("./idea.service");
var IdeaListComponent = (function () {
    function IdeaListComponent(is, router) {
        this.is = is;
        this.router = router;
        this.ideas = this.is.ideas;
        this.ideas.sort(function (a, b) {
            if (a.notemoyenne > b.notemoyenne)
                return -1;
            else if (a.notemoyenne < b.notemoyenne)
                return 1;
            else
                return 0;
        });
        $("#page-wrapper").css('background', '#ffffff');
    }
    IdeaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.ideas = _this.is.ideas;
        }, 100);
    };
    return IdeaListComponent;
}());
IdeaListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'idea-list.component.html',
        styleUrls: ['../../assets/css/shop-homepage.css'],
    }),
    __metadata("design:paramtypes", [idea_service_1.IdeaService, router_1.Router])
], IdeaListComponent);
exports.IdeaListComponent = IdeaListComponent;
//# sourceMappingURL=idea-list.component.js.map