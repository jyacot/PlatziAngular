import { Component, OnInit, OnChanges } from "@angular/core";
import { PersonasServices } from "../services/personas.services";
import { Location } from "@angular/common";
import { Observable } from "rxjs";

@Component({
    selector:"crear-elemento",
    templateUrl: "./crearElemento.html"
})

export class CrearElemento implements OnInit{
    personas: Observable<any[]>;
    formPersona = {};
    constructor(private Personas: PersonasServices, private Location: Location){
    };
    ngOnInit(){
        let _this = this;
        this.personas = this.Personas.getPersonas();
    }
    addPersona(){
        // console.log(this.formPersona)
        this.Personas.addPersona(this.formPersona);
        this.formPersona = {};
        this.Location.back();
    }
}