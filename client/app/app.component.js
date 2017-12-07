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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./home/login.service");
var idea_service_1 = require("./ideas/idea.service");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var io = require("socket.io-client");
var AppComponent = (function () {
    function AppComponent(iS, loginService, router, document) {
        this.iS = iS;
        this.loginService = loginService;
        this.router = router;
        this.document = document;
        this.student = false;
        this.notify = false;
        this.etd = true;
        console.log(this.document.location.href);
        this.socket = io.connect('http://localhost:3000/');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (!(_this.user)) {
                console.log("trying to get user");
                _this.notify = false;
                _this.requeststoJOin = [];
                _this.notifications = [];
                _this.user = _this.loginService.user;
            }
            else {
                if (_this.loginService.user.as == 'student') {
                    _this.student = true;
                }
                else {
                    _this.student = false;
                }
                if (!_this.notify) {
                    _this.socket.emit("username", { id: _this.loginService.user.data.id, as: _this.loginService.user.as });
                    _this.socket.on('notifyjoin', function (data) {
                        $(".fa-bell").css('color', 'red');
                        //this.requeststoJOin.push(data);
                        this.getRequeststojoin();
                    });
                    _this.socket.on('newnotification', function (data) {
                        $(".fa-bell").css('color', 'red');
                        this.getNotifications();
                    });
                    _this.getRequeststojoin();
                    _this.getNotifications();
                    _this.notify = true;
                }
                _this.interval = 500000;
                $('.shownavbar').css('display', 'block');
                $('.disable-enable').removeClass('disable-enable');
            }
        }, this.interval);
        console.log(this.router.url);
        if (this.document.location.href != 'http://localhost:3000/auth' && !this.user) {
            this.loginService.CurrentUser();
        }
    };
    AppComponent.prototype.logOut = function () {
        var _this = this;
        this.loginService.logOut().subscribe(function (data) {
            if (data.success) {
                //$('.shownavbar').addClass('disable-enable');//addClass('disable-enable');
                _this.user = null;
                $('.shownavbar').css('display', 'none');
                _this.router.navigate(['/auth']);
                _this.interval = 100;
            }
        }, function (err) { console.log("err"); }, function () { });
    };
    AppComponent.prototype.closePopup = function () {
        $('#myModal').hide();
    };
    AppComponent.prototype.accept = function (event) {
        var _this = this;
        console.log(this.requeststoJOin[parseInt(event.target.value)]);
        var data = {
            "id_prop": this.requeststoJOin[parseInt(event.target.value)].proposition.id_prop,
            "id_user": this.requeststoJOin[parseInt(event.target.value)].etudiant.id,
            "accept": true
        };
        console.log(event.target.value);
        this.iS.acceptrefusjoin(data).subscribe(function (data) {
            _this.loginService.getRequesttoJoin(_this.loginService.user.data.id).subscribe(function (data) { _this.requeststoJOin = data; }, function (err) { console.log(err); }, function () { console.log(_this.requeststoJOin); });
        }, function (err) { console.log(err); }, function () { });
    };
    AppComponent.prototype.refus = function (event) {
        var _this = this;
        var data = {
            "id_prop": this.requeststoJOin[parseInt(event.target.value)].proposition.id_prop,
            "id_user": this.requeststoJOin[parseInt(event.target.value)].etudiant.id,
            "accept": false
        };
        this.iS.acceptrefusjoin(data).subscribe(function (data) {
            _this.loginService.getRequesttoJoin(_this.loginService.user.data.id).subscribe(function (data) { _this.requeststoJOin = data; }, function (err) { console.log(err); }, function () { console.log(_this.requeststoJOin); });
        }, function (err) { console.log(err); }, function () { });
    };
    AppComponent.prototype.getNotifications = function () {
        var _this = this;
        this.loginService.getNotifications(this.loginService.user.login).subscribe(function (data) { _this.notifications = data; }, function (err) { console.log(err); }, function () { console.log(_this.notifications); });
    };
    AppComponent.prototype.getRequeststojoin = function () {
        var _this = this;
        this.loginService.getRequesttoJoin(this.loginService.user.data.id).subscribe(function (data) { _this.requeststoJOin = data; }, function (err) { console.log(err); }, function () { console.log(_this.requeststoJOin); });
    };
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AppComponent.prototype, "idetd", void 0);
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['../assets/css/bootstrap.min.css',
            '../assets/css/sb-admin.css',
            '../assets/css/plugins/morris.css',
            '../assets/font-awesome/css/font-awesome.min.css']
    }),
    __param(3, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [idea_service_1.IdeaService, login_service_1.LoginService, router_1.Router, Object])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map