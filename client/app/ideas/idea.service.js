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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var IdeaService = (function () {
    function IdeaService(_http) {
        var _this = this;
        this._http = _http;
        console.log('Service idea initialisé');
        this._http.get('http://localhost:3000/api/ideas').map(function (res) { return res.json(); }).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logData(err); }, function () { return 'Quote complete'; });
    }
    IdeaService.prototype.getIdeas = function () {
        var _this = this;
        this._http.get('http://localhost:3000/api/ideas').map(function (res) { return res.json(); }).subscribe(function (data) { return _this.logData(data); }, function (err) { return _this.logData(err); }, function () { return 'Quote complete'; });
    };
    IdeaService.prototype.getNotes = function (id) {
        var data = {
            'id': id
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/getNotes', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
        ;
    };
    IdeaService.prototype.getDescriptions = function (id) {
        var data = {
            'id': id
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/getDescriptions', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.getComments = function (id) {
        var data = {
            'id': id
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/getComments', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.getJoin = function (data) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/checkjoin', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.acceptrefusjoin = function (data) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/idea/modifyjoinstudent', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.logData = function (data) {
        var element;
        data.forEach(function (element) {
            var s = 0;
            element.notemoyenne.forEach(function (el) {
                s = s + el;
            });
            element.notemoyenne = s / element.notemoyenne.length;
        });
        this.ideas = data;
        console.log(data);
    };
    IdeaService.prototype.logErr = function (err) {
        console.log(err);
    };
    IdeaService.prototype.rejoindreIdea = function (id_etd, id_prop, ass) {
        var data = {
            "id_prop": id_prop,
            "id_etd": id_etd,
            "as": ass
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/idea/joinstudent', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.followIdea = function (login, id_idee) {
        var data = {
            "id_idee": id_idee,
            "login": login
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/idea/follow', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.checkfollowIdea = function (login, id_idee) {
        var data = {
            "id_idee": id_idee,
            "login": login
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/idea/checkfollow', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.getTeam = function (id_prop) {
        var data = {
            "id_prop": id_prop
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/idea/getTeam', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.AddComment = function (id_user, id_prop, comment) {
        var data = {
            "id_prop": id_prop,
            "id_user": id_user,
            "commentaire": comment
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/idea/postcomment', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.AddNote = function (data) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/idea/AddNote', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.CreerIdea = function (id_user, titre, des1, des2, des3, des4, des5, des6) {
        var data = {
            "id_user": id_user,
            "titre": titre,
            "des1": des1,
            "des2": des2,
            "des3": des3,
            "des4": des4,
            "des5": des5,
            "des6": des6,
        };
        var headers = new http_1.Headers();
        headers.append('Content-type', 'Application/json');
        return this._http.post('http://localhost:3000/api/idea/creer', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return IdeaService;
}());
IdeaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], IdeaService);
exports.IdeaService = IdeaService;
//# sourceMappingURL=idea.service.js.map