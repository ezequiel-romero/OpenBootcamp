import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy {

  @Input() nombre: string = "Anónimo";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit del componente Saludo");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("El componente recibe cambios");
  }
  
  ngOnDestroy(): void {
    console.log("El componente destruye");
  }

  alertaSaludo(): void{
    alert(`Hola ${this.nombre}. Alerta despachada desde un click de botón.`)
  }

  enviarMensajeAlPadre(): void{
    this.mensajeEmitter.emit(`Hola ${this.nombre}. Alerta despachada desde un click de botón.`)
  }

}
