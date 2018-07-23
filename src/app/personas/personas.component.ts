import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PersonasServices } from "../services/personas.services";

@Component({
  selector: "personas",
  templateUrl: "./personas.html"
})
export class Personas implements OnInit {
  personas: any;
  formPersona = {};
  constructor(private PersonasServices: PersonasServices) {}
  ngOnInit() {
    this.PersonasServices.getWs().subscribe(
      persona => (this.personas = persona)
    );
  }
}
