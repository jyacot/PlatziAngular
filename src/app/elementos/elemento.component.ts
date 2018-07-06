import { Component} from "@angular/core";
import { PersonasServices } from "../services/personas.services";
import { Observable } from "rxjs";

@Component({
    selector:"elementos",
    templateUrl:"./elemento.html",
})

export class Elemento{
    elementos = null;
    fakes= {};
    constructor(private PersonasServices: PersonasServices){
        this.elementos = PersonasServices.getPersonas();
        this.fakes = PersonasServices.getWs();
    }
}