import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test App'
  nombre = 'Oveja'

  // Se ejecuta cuando en el hijo se pulsa un boton
  recibirMensajeDelHijo(evento: string) {
    alert(evento)
  }
}
