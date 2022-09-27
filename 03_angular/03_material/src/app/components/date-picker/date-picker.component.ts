import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent implements OnInit {

  formularioReserva: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) {
    const hoy = new Date();
    const numero = hoy.getDate();
    const mes = hoy.getMonth();
    const anio = hoy.getFullYear();
    
    this.formularioReserva = this.formBuilder.group({
      desde: new FormControl(new Date(anio, mes, numero)),
      hasta: new FormControl(new Date(anio, mes, numero + 1))
    })

  }

  ngOnInit(): void {}

}
