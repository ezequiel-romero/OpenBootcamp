import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// Módulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Importación de módulo personalizado
    ListsModule,
    // Importamos el módulo HttpClientModules para hacer peticiones HTTP
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
