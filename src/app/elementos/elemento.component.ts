import { Component} from "@angular/core";
import { PersonasServices } from "../services/personas.services";

@Component({
    selector:"elementos",
    templateUrl:"./elemento.html",
})

export class Elemento{
    elementos:object = null;
    fakes:any = {};
    constructor(private PersonasServices: PersonasServices){
        this.elementos = PersonasServices.getPersonas();
        this.fakes = PersonasServices.getWs();
    }
}