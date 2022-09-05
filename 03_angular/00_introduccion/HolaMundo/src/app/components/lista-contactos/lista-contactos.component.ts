import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  // Creamos una lista de contactos
  listaContactos: IContacto[] = []
  contactoSeleccionado: IContacto | undefined

  // suscripcion de Servicio
  suscription : Subscription | undefined

  // Inyectamos el Servicio de CONTACTOS en el Constructor
  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    // Obtener la lista de contactos que nos brinda el Servicio
    //this.listaContactos = this.contactoService.obtenerContactos()
    this.contactoService.obtenerContactos() //Si se resuelve la promesa obtengo la lista
      .then((lista: IContacto[]) => this.listaContactos = lista)
      .catch((error) => console.error(`Ha habido un error al recuperar la lista de contactos ${error}`))
      .finally(() => console.log(`Petición de lista de contactos terminada`))
  }

  masInfo(id: number) {
    this.suscription = this.contactoService.obtenerContactoPorID(id)
      ?.subscribe((contacto: IContacto) => this.contactoSeleccionado = contacto)
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe()
  }

}
