import { Component } from "@angular/core";
import { PersonasServices } from "../services/personas.services";

@Component({
    selector:"elementos",
    templateUrl:"./elemento.html"
})

export class Elemento{
    elementos = null;
    constructor(private PersonasServices: PersonasServices){
        this.elementos = PersonasServices.getPersonas();
    }
}