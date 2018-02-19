"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var List3Component = /** @class */ (function () {
    function List3Component() {
    }
    List3Component.prototype.onSave = function () {
        console.log('saved');
    };
    List3Component.prototype.testEvent = function (event) {
        for (var prop in event) {
            console.log(prop + " =  " + event);
        }
    };
    List3Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "list3",
            styleUrls: ["./list3.component.css"],
            templateUrl: "/app/list3/list3.component.html"
        })
    ], List3Component);
    return List3Component;
}());
exports.List3Component = List3Component;
//# sourceMappingURL=list3.component.js.map