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
var IdeaDetailComponent = (function () {
    function IdeaDetailComponent(_route, _router, is, ls) {
        this._route = _route;
        this._router = _router;
        this.is = is;
        this.ls = ls;
        this.join = false;
        $("#page-wrapper").css('background', '#ffffff');
    }
    IdeaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.ls.user;
        var rating = $("#rating");
        this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.idea = _this.is.ideas[id - 1];
        });
        console.log(this.idea.notemoyenne);
        if (isNaN(this.idea.notemoyenne)) {
            rating.html('<span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
        }
        else if (this.idea.notemoyenne < 2) {
            rating.html('<span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
        }
        else if (this.idea.notemoyenne > 2 && this.idea.notemoyenne < 4) {
            rating.html('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
        }
        else if (this.idea.notemoyenne > 3 && this.idea.notemoyenne < 6) {
            rating.html('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>');
        }
        else if (this.idea.notemoyenne > 4 && this.idea.notemoyenne < 8) {
            rating.html('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span>');
        }
        else {
            rating.html('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
        }
        this.is.getNotes(this.idea.id).subscribe(function (data) { _this.notes = data; }, function (err) { console.log(err); }, function () { console.log(_this.notes); });
        this.is.getDescriptions(this.idea.proposition.id_prop).subscribe(function (data) { _this.descriptions = data; }, function (err) { console.log('err'); }, function () { console.log(_this.descriptions); });
        this.is.getComments(this.idea.proposition.id_prop).subscribe(function (data) {
            _this.comments = data;
        }, function (err) { console.log(err); }, function () { console.log(_this.comments); });
        this.is.getTeam(this.idea.proposition.id_prop).subscribe(function (data) { console.log(data); _this.teamens = data.enseignant; _this.teamstud = data.student; console.log(_this.teamstud); }, function (err) { console.log(err); }, function () { });
        if (this.currentUser.as == 'student') {
            var x = {
                as: 'student',
                id: this.currentUser.data.id,
                prop_id: this.idea.proposition.id_prop
            };
            this.is.getJoin(x).subscribe(function (data) {
                _this.join = data.join;
                console.log(_this.join);
                if (_this.join) {
                    $("#rejoindre").text("invitation envoyée");
                    $("#rejoindre").removeClass("btn-success");
                }
            }, function (err) { console.log(err); }, function () { console.log('complete'); });
        }
        /* this.is.checkfollowIdea(this.currentUser.login,this.idea.proposition.id_prop).subscribe(
             data =>{if (data.success){
         $("#follow").text("abonné");$("#follow").removeClass("btn-success")
     }},
     err =>{},
     () => {}
         )*/
    };
    IdeaDetailComponent.prototype.joinIdea = function () {
        if (this.currentUser.as == 'student') {
            var id_etd = this.currentUser.data.id;
            var id_prop = this.idea.proposition.id_prop;
            this.is.rejoindreIdea(id_etd, id_prop, this.currentUser.as).subscribe(function (data) { $("#rejoindre").text("invitation envoyée"); $("#rejoindre").removeClass("btn-success"); }, function (err) { console.log(err); }, function () { console.log('complete'); });
        }
        else if (this.currentUser.as == 'enseignant') {
            var id_etd = this.currentUser.data.id;
            var id_prop = this.idea.proposition.id_prop;
            this.is.rejoindreIdea(id_etd, id_prop, this.currentUser.as).subscribe(function (data) { $("#rejoindre").text("déja membre"); $("#rejoindre").removeClass("btn-success"); }, function (err) { console.log(err); }, function () { console.log('complete'); });
        }
    };
    IdeaDetailComponent.prototype.addComment = function () {
        var _this = this;
        var id_user = this.currentUser.login;
        var id_prop = this.idea.proposition.id_prop;
        var comment = this.comment;
        console.log(comment);
        this.is.AddComment(id_user, id_prop, comment).subscribe(function (data) {
            _this.is.getComments(_this.idea.proposition.id_prop).subscribe(function (data) { _this.comments = data; }, function (err) { console.log(err); }, function () { console.log(_this.comments); });
        }, function (err) { console.log(err); }, function () { });
        this.comment = '';
    };
    IdeaDetailComponent.prototype.showPopup = function () {
        $("#myModal").show();
    };
    IdeaDetailComponent.prototype.addNote = function () {
        var _this = this;
        var data = {
            "enseignant_id": this.currentUser.data.id,
            "idea_id": this.idea.id,
            "creativite": this.creativite,
            "originalite": this.originalite,
            "rentabilite": this.rentabilite
        };
        console.log(data);
        this.is.AddNote(data).subscribe(function (data) {
            if (data.success) {
                console.log("note ajoutée");
                _this.is.getNotes(_this.idea.id).subscribe(function (data) { _this.notes = data; }, function (err) { console.log(err); }, function () { console.log(_this.notes); });
            }
        }, function (err) { console.log(err); }, function () { console.log('complete'); });
    };
    IdeaDetailComponent.prototype.followIdea = function () {
        var id_idee = this.idea.propositions.id_prop;
        var login = this.currentUser.login;
        this.is.followIdea(login, id_idee).subscribe(function (data) {
            if (data.success) {
                $("#follow").text("abonné");
                $("#follow").removeClass("btn-success");
            }
        }, function (err) { }, function () { });
    };
    return IdeaDetailComponent;
}());
IdeaDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'idea-detail.component.html',
        styleUrls: ['../../assets/css/shop-item.css',
            '../../assets/css/idea.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        idea_service_1.IdeaService,
        login_service_1.LoginService])
], IdeaDetailComponent);
exports.IdeaDetailComponent = IdeaDetailComponent;
//# sourceMappingURL=idea-detail.component.js.map