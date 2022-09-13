import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// Módulos Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';

// Módulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Importación de módulo personalizado
    ListsModule,
    // Importamos el módulo HttpClientModules para hacer peticiones HTTP
    HttpClientModule,
    // Importamos ReactiveFormModules para poder hacer uso de formularios reactivos que se puedan modificar en tiempo real
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Importamos los modulos de Angular Material que usamos en los formularios
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
