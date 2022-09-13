import { Component, OnInit } from '@angular/core';

// Importamos Form Builder
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {

  miFormularioArray: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.miFormularioArray = this.formBuilder.group(
      {
        nombre: '',
        apellido: '',
        telefonos: this.formBuilder.array([]) // Inicializamos la lsita de telefonos vacia
      }
    )

  }

  // Metodo Getter para obtener el FormArray de la lista de telefonos
  get telefonosFormulario(): FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray
  }

  // Metodo para añadir Telefonos a la lista
  anadirTelefono(){
    // Creamos un grupo telefono
    const telefonoNuevo = this.formBuilder.group(
      {
        prefijo: '',
        numero: ''
      }
    )

    // Añadimos el grupo a la lsita de telefonos
    this.telefonosFormulario.push(telefonoNuevo)
  }

  // Metodo para eliminar Telefonos de la lista
  eliminarTelefono(index: number){
    this.telefonosFormulario.removeAt(index)
  }

}
