import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()

export class PersonasServices{
    personas: Observable<any[]>;
    URL_FAKE:string = "https://jsonplaceholder.typicode.com/posts";
    constructor(private db:AngularFirestore, private ws:HttpClient){
        this.personas = db.collection("personas").valueChanges();
    };
    public getPersonas(){
        return this.personas;
    };
    public addPersona(persona){
        this.db.collection("personas").add(persona)
    };
    public delPersona(id){
        // TODO:Pendiente

    };
    getWs(){
        return this.ws.get(this.URL_FAKE);
    }
}