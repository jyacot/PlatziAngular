import { Component } from "@angular/core";
import { PersonasServices } from "../services/personas.services";
import { Location } from "@angular/common";

@Component({
    selector:"crear-elemento",
    templateUrl: "./crearElemento.html"
})

export class CrearElemento{
    personas = []
    formPersona = {}
    constructor(private Personas: PersonasServices, private Location: Location){
        this.personas = Personas.getPersonas();
    }

    addPersona(){
        // console.log(this.formPersona)
        this.Personas.addPersona(this.formPersona);
        this.formPersona = {};
        this.Location.back();
    }
}