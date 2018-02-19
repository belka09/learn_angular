import { Component } from "@angular/core";

@Component({
    selector: "list-1",
    templateUrl: "app/list1/list1.component.html",
    styleUrls: ["app/list1/list1.component.css"]
})
export class List1Component {
    public firstName: string;
    public lastName: string;

    constructor(){
        this.firstName = "Ivan";
        this.lastName = "Ivanov";
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}