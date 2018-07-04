import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";
// import {sha256} from "crypto-js/sha256"

@Injectable()

export class PersonasServices{
    personas:Observable<any[]>;
    constructor(private db:AngularFirestore){
        this.personas = db.collection("personas").valueChanges();
    }
    public getPersonas(){
        return this.personas;
    };
    public addPersona(persona){
        let ref = this.db.collection("personas")
        console.log(ref)
        // persona.id = Date.now().toString()
        // this.db.collection("personas").add(persona)
    };
    public delPersona(id){

    }
}