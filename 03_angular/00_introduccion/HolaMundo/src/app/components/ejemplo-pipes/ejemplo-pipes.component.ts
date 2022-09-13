import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { IJugador } from 'src/app/models/jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1990,2,10)
  cambio: boolean = true
  nombre: string = 'Ezequiel'
  numero_pi: number = 3.1415926535897
  precioCarrito: number = 100
  persona: IContacto = {
    id: 0,
    nombre: 'Ezequiel',
    apellido: 'romero',
    email: 'eze.1003@gmail.com',
    edad: 32
  }
  cantidad: number = 0.35
  textoLargo: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."

  // Ejemplo para PIPE calcularPuntuacion
  jugador1: IJugador = {
    nombre: "Ezequiel",
    puntos: [10, 30, 40, 0]
  }

  jugador2: IJugador = {
    nombre: "Cesar",
    puntos: [7, 23, 0, 80]
  }

  constructor() { }

  ngOnInit(): void {
  }

  // Si cambio es True muestro shordate dentro del formatio del pipe. Sino fulldate
  get dateFormat() {
    return this.cambio ? 'shortDate' : 'fullDate'
  }

  // Cambio el valor de $cambio
  cambiarFormato(){
    this.cambio = !this.cambio
  }

}
