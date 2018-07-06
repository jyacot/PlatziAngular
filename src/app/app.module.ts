import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router.module';
import { Home } from './home/home.component';
import { Contacto } from './contacto/contacto.component';
import { Elemento } from './elementos/elemento.component';
import { PersonasServices } from './services/personas.services';
import { environment } from './environments/environment';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore"
import { CrearElemento } from './elementos/crearElemento.component';
import  {FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Contacto,
    Elemento,
    CrearElemento
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [PersonasServices],
  bootstrap: [AppComponent]
})
export class AppModule { }