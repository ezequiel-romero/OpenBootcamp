import { Injectable } from '@angular/core';

//Importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {
    //return CONTACTOS //Nos devuelve una lista de contactos
    return Promise.resolve(CONTACTOS)
  }

  obtenerContactoPorID(id: number): Observable<IContacto> | undefined {

    // Buscamos el contacto por ID dentro de la lista de CONTACTOS mockeados
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id)
    
    // Creamos un observable
    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto) // Emitir un valor a todo componente suscrito
      observer.complete // No emitimos mas valores
    })

    if(contacto) {
      return observable
    } else {
      return
    }


  }
}
