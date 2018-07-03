import { Injectable } from "@angular/core";

@Injectable()

export class PersonasServices{
    personas:any = [];
    public getPersonas(){
        return this.personas;
    };
    public addPersona(persona){
        let personaPresente = this.personas.find(p=>persona.nombre ==p.nombre);
        if(personaPresente){
            this.personas[this.personas.findIndex(p=>persona.nombre ==p.nombre)] = persona;
        }else{
            this.personas.push(persona);
        }
    };
}