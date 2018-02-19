import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "list3",
    styleUrls: ["./list3.component.css"],
    templateUrl: "/app/list3/list3.component.html"
})

export class List3Component { 
    onSave() {
        console.log('saved');
    }

    testEvent(event){
        for (let prop in event){
            console.log(prop + " =  " + event)
        }
    }
}