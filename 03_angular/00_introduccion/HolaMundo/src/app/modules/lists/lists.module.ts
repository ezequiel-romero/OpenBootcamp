import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';



@NgModule({
  declarations: [
    BasicListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Exportamos aquellas clases (componentes, pipes, services, etc) que querramos compartir con quien importe este módulo
    BasicListComponent
  ]
})
export class ListsModule { }
