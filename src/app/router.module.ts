import {Routes, RouterModule} from "@angular/router"
import { NgModule } from "@angular/core";
import { Home } from "./home/home.component";
import { Contacto } from "./contacto/contacto.component";
import { Elemento } from "./elementos/elemento.component";
import { CrearElemento } from "./elementos/crearElemento.component";

const routes: Routes = [
    { path: "", component: Home },
    { path: "contacto", component: Contacto },
    { path: "personas", component: Elemento },
    { path:"crear_persona", component: CrearElemento}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}