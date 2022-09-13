import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// Locale para PIPES
import { registerLocaleData } from '@angular/common';
import localesAR from '@angular/common/locales/es-AR';
registerLocaleData(localesAR) // Registramos el LOCALE_ID de 'es-AR' para poder usarlo con los pipes

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
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe
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
  providers: [
    // Registramos el Locale de es-AR para que los PIPES salgan en español
    {
      provide: LOCALE_ID, useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
