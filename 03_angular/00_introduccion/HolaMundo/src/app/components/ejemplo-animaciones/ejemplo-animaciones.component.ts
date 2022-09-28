import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ejemplo-animaciones',
  templateUrl: './ejemplo-animaciones.component.html',
  styleUrls: ['./ejemplo-animaciones.component.scss'],
  // Metadatos para la animación del componente
  animations: [
    trigger('animaciones',[
      state('active', style({
        transform: 'translate(10px, 20px)'
      })),
      state('inactive', style({
        transform: 'translate(0, 0)'
      })),
      state('derecha', style({
        transform: 'translateX(100px)',
        transition: 'all 0.5s ease-in-out'
      })),
      state('izquierda', style({
        transform: 'translateX(-100px)',
        transition: 'all 0.5s ease-in-out',
        marginTop: '200px' 
      })),
      state('rotar', style({
        transform: 'rotate(90deg)',
        transition: 'all 0.5s ease-in-out',
        marginTop: '100px' 
      })),
      state('volver', style({
        transform: 'rotate(0deg)',
        transition: 'all 0.5s ease-in-out'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class EjemploAnimacionesComponent implements OnInit {

  state: string = 'inactive'

  constructor() { }

  ngOnInit(): void {

    // setInterval(() => {
    //   if (this.state == 'active') {
    //     this.state = 'inactive'
    //   } else {
    //     this.state = 'active'
    //   }
    // }, 1000)
  }

  izquierdaAnimacion(){
    this.state = 'izquierda'
  }
  derechaAnimacion(){
    this.state = 'derecha'
  }
  rotarAnimacion(){
    if (this.state !== 'rotar') {
      this.state = 'rotar'  
    } else if (this.state == 'rotar') {
      this.state = 'volver'
    }
    
  }

}
