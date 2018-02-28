import { Component, OnInit } from "@angular/core";
import { List5Component } from "./list5.component";

@Component({
    moduleId: module.id,
    selector: "list5-host",
    templateUrl: "./list5-host.component.html",
    inputs: [name]
})

export class SampleComponent {
    name: string;

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(this.name + " initialized");
    }
}