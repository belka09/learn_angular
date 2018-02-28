import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./list6.component.html",
    selector: 'list6'
})

export class List6Component{


    public firstName: string;
    public lastName: string;

    constructor(){
        this.firstName = "Ivan";
        this.lastName = "Ivanov";
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}