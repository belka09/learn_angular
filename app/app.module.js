"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router"); // модуль для маршрутизации
var app_component_1 = require("./app.component");
var list1_component_1 = require("./list1/list1.component");
var list2_component_1 = require("./list2/list2.component");
var list3_component_1 = require("./list3/list3.component");
var list4_component_1 = require("./list 4/list4.component");
var list5_host_component_1 = require("./list5/list5-host.component");
var list5_component_1 = require("./list5/list5.component");
var list6_component_1 = require("./list6/list6.component");
var list7_component_1 = require("./list7/list7.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: "list1", component: list1_component_1.List1Component },
                    { path: "list2", component: list2_component_1.List2Component },
                    { path: "list3", component: list3_component_1.List3Component },
                    { path: "list4", component: list4_component_1.List4Component },
                    { path: "list5", component: list5_component_1.List5Component },
                    { path: "list6", component: list6_component_1.List6Component },
                    { path: "list7", component: list7_component_1.List7Component },
                    { path: "", redirectTo: "list1", pathMatch: "full" }
                ])
            ],
            declarations: [app_component_1.AppComponent, list1_component_1.List1Component, list2_component_1.List2Component, list3_component_1.List3Component, list4_component_1.List4Component, list5_host_component_1.SampleComponent, list5_component_1.List5Component, list6_component_1.List6Component, list7_component_1.List7Component],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map