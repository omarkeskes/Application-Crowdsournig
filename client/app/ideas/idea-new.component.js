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
var login_service_1 = require("../home/login.service");
var IdeaNewComponent = (function () {
    function IdeaNewComponent(ideaservice, ls, router) {
        this.ideaservice = ideaservice;
        this.ls = ls;
        this.router = router;
        this.user = this.ls.user;
        $("#page-wrapper").css('background', '#ffffff');
    }
    IdeaNewComponent.prototype.creer = function () {
        var _this = this;
        if (this.des1 != "" && this.des2 != "" && this.des3 != "" && this.des4 != "" && this.des5 != "" && this.des6 != "") {
            this.ideaservice.CreerIdea(this.user.data.id, this.titre, this.des1, this.des2, this.des3, this.des4, this.des5, this.des6).subscribe(function (data) {
                _this.ideaservice.getIdeas();
                _this.router.navigate(['/ideas']);
            }, function (err) { console.log(err); }, function () { console.log('complete'); });
        }
        else {
            //msg
        }
    };
    return IdeaNewComponent;
}());
IdeaNewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'idea-new.component.html',
        styleUrls: ['../../assets/css/idea.css']
    }),
    __metadata("design:paramtypes", [idea_service_1.IdeaService, login_service_1.LoginService, router_1.Router])
], IdeaNewComponent);
exports.IdeaNewComponent = IdeaNewComponent;
//# sourceMappingURL=idea-new.component.js.map