"use strict";
// import { NgModule } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";
// import { RouterModule } from "@angular/router"; // модуль для маршрутизации
// import { AppComponent } from "./app.component";
// import { List1Component } from "./list1/list1.component" ;
// import { List2Component } from "./list2/list2.component" 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @NgModule({
//     imports :[
//         BrowserModule,
//         RouterModule.forRoot([
//             {path: "list1" , component: List1Component},
//             {path: "list2" , component: List2Component},
//             {path: "" , component: List1Component }
//         ])
//     ],
//     declarations: [AppComponent, List1Component, List2Component],
//     bootstrap: [AppComponent] 
// })
// export class AppModule { }
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router"); // модуль для маршрутизации
var app_component_1 = require("./app.component");
var list1_component_1 = require("./list1/list1.component");
var list2_component_1 = require("./list2/list2.component");
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
                    { path: "", redirectTo: "list1", pathMatch: "full" }
                ])
            ],
            declarations: [app_component_1.AppComponent, list1_component_1.List1Component, list2_component_1.List2Component],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map