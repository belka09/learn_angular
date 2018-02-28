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
var List6Component = /** @class */ (function () {
    function List6Component() {
        this.allClasses = "accent-border error-text highlighted";
        this.currentClasses = "";
        this.isAccentBorder = true;
        this.isErrorText = true;
        this.isHighlighted = true;
        this.imageSrc = '/app/images/angular.png';
        this.imageTitle = "Data binding in Angular 2";
        this.flag = true;
        this.firstName = "Ivan";
        this.lastName = "Ivanov";
    }
    List6Component.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    List6Component.prototype.getDivColor = function () {
        return 'green';
    };
    List6Component.prototype.toggleAllClasses = function () {
        if (this.currentClasses == "") {
            this.currentClasses = this.allClasses;
        }
        else {
            this.currentClasses = "";
        }
    };
    List6Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./list6.component.html",
            selector: 'list6',
            styleUrls: ["./list6.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], List6Component);
    return List6Component;
}());
exports.List6Component = List6Component;
//# sourceMappingURL=list6.component.js.map