import { Component, OnInit } from '@angular/core';

// Ejemplo basico de Formulario Reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  // Definimos nuestro formulario
  miFormulario: FormGroup = new FormGroup({})
  //Inyectamos la clase FormBuilder que nos ayuda a crear el formulario FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // Iniciamos los campos del formulario y sus valores por defecto
    this.miFormulario = this.formBuilder.group(
      {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: ''
      }
    )

    // Nos suscribimos a los cambios que ocurran en el Formulario y los mostramos por consola
    this.miFormulario.valueChanges.subscribe(
      console.log
    )
    // Mismo resultado que
    // this.miFormulario.valueChanges.subscribe((valor) => {
    //   console.log(valor)
    // })

  }

}
