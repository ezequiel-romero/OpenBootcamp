import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

//  Crear un tipo base para el ejemplo
export type Producto = {
  nombre: string
  precio: number
  descripcion: string
}

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {

  listElements: Producto[] = [
    {
      nombre: 'Leche',
      precio: 10,
      descripcion: 'Leche entera'
    },
    {
      nombre: 'Carne',
      precio: 35,
      descripcion: 'Carne de cerdo'
    },
    {
      nombre: 'Huevos',
      precio: 5,
      descripcion: 'Huevos de campo'
    },
    {
      nombre: 'Aceite',
      precio: 15,
      descripcion: 'Aceite de girasol'
    }
  ]

  cargando: boolean = true

  option: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCargando(){
    this.cargando = !this.cargando
  }

  escogerOpcion(optionChosen: number) {
    this.option = optionChosen
  }

}
