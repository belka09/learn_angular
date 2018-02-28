"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
    }
    SampleComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(this.name + " initialized");
    };
    SampleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "list5-host",
            templateUrl: "./list5-host.component.html",
            inputs: [name]
        })
    ], SampleComponent);
    return SampleComponent;
}());
exports.SampleComponent = SampleComponent;
//# sourceMappingURL=list5-host.component.js.map