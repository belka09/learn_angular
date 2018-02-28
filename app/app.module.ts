import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // модуль для маршрутизации

import { AppComponent } from "./app.component";
import { List1Component } from "./list1/list1.component";
import { List2Component } from "./list2/list2.component";
import { List3Component} from "./list3/list3.component";
import { List4Component } from "./list 4/list4.component";
import { SampleComponent } from "./list5/list5-host.component";
import { List5Component } from "./list5/list5.component";
import { List6Component } from "./list6/list6.component";
import { List7Component } from "./list7/list7.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([ // настройка маршрутов
            { path: "list1", component: List1Component }, // при переходе по адресу localhost:3000/component1 должен активироваться компонент List1Component
            { path: "list2", component: List2Component },
            { path: "list3", component: List3Component },
            { path: "list4", component: List4Component },
            { path: "list5", component: List5Component },
            { path: "list6", component: List6Component },
            { path: "list7", component: List7Component },
            { path: "", redirectTo: "list1", pathMatch: "full" }
        ])
    ],
    declarations: [AppComponent, List1Component, List2Component , List3Component, List4Component, SampleComponent, List5Component, List6Component, List7Component],
    bootstrap: [AppComponent]
})
export class AppModule { }
