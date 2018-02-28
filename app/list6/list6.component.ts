import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./list6.component.html",
    selector: 'list6',
    styleUrls: ["./list6.component.css"]
})

export class List6Component{

    allClasses : string = "accent-border error-text highlighted";
    currentClasses: string = "";
    isAccentBorder: boolean = true;
    isErrorText: boolean = true;
    isHighlighted: boolean = false;



    imageSrc: string = '/app/images/angular.png';
    imageTitle: string = "Data binding in Angular 2";
    public firstName: string;
    public lastName: string;
    flag: boolean = true;

    constructor(){
        this.firstName = "Ivan";
        this.lastName = "Ivanov";
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }


    toggleAllClasses(){
        if(this.currentClasses == ""){
            this.currentClasses = this.allClasses;
        }
        else {
            this.currentClasses = "";
        }
    }

}