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
var login_service_1 = require("../home/login.service");
var $ = require('../../../../../node_modules/jquery/dist/jquery.min.js');
var AuthComponent = (function () {
    function AuthComponent(loginservice) {
        this.loginservice = loginservice;
        console.log("AuthComponent");
        this.changeTab();
        this.change();
        $("#page-wrapper").css('background', '#c1bdba');
    }
    AuthComponent.prototype.authenticate = function (event) {
        var data = {
            "username": this.username,
            "password": this.password
        };
        console.log(data);
        this.loginservice.Authenticate(data);
        this.username = "";
        this.password = "";
    };
    AuthComponent.prototype.changeTab = function () {
        $('.tab a').on('click', function (e) {
            console.log('test');
            e.preventDefault();
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
            var target = $(this).attr('dest');
            $('.tab-content > div').not(target).hide();
            $(target).fadeIn(600);
        });
    };
    AuthComponent.prototype.change = function () {
        $('.form').find('input, textarea').on('keyup blur focus', function (e) {
            var $this = $(this), label = $this.prev('label');
            if (e.type === 'keyup') {
                if ($this.val() === '') {
                    label.removeClass('active highlight');
                }
                else {
                    label.addClass('active highlight');
                }
            }
            else if (e.type === 'blur') {
                if ($this.val() === '') {
                    label.removeClass('active highlight');
                }
                else {
                    label.removeClass('highlight');
                }
            }
            else if (e.type === 'focus') {
                if ($this.val() === '') {
                    label.removeClass('highlight');
                }
                else if ($this.val() !== '') {
                    label.addClass('highlight');
                }
            }
        });
    };
    AuthComponent.prototype.register = function () {
        var data = {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "registeremail": this.registeremail,
            "as": this.as,
            "passwordregister": this.passwordregister
        };
        console.log(data);
        this.loginservice.Register(data);
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'auth.component.html',
        styleUrls: ['../../assets/css/style.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map