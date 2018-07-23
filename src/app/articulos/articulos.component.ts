import { Component } from "@angular/core";
import { ArticulosServices } from "../services/articulos.services";
import { Observable } from "rxjs";

@Component({
  templateUrl: "./articulos.html",
  selector: "articulos-component"
})
export class ArticulosComponent {
  msg: String = "Test de Articulos!";
  articulos: Observable<any>;
  constructor(private ArticulosServices: ArticulosServices) {
    this.articulos = this.ArticulosServices.getArticulos();
  }
}
