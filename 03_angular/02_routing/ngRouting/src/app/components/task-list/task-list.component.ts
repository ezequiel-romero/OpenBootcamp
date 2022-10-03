import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {

  todo: ITask[] = [
    {
      title: 'Revisar Alternador',
      description: 'Nivel de carga bajo. Cuesta el arranque',
      status: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Cambiar Aceite',
      description: 'Todavía faltan 2000 kms pero hay que empezar a planearlo',
      status: false,
      level: LEVELS.URGENT
    },
    {
      title: 'Revisar Correas',
      description: 'Hace rato que no se revisan las correas de accesorios y distribucion',
      status: false,
      level: LEVELS.INFO
    },
    {
      title: 'Cambiar Manguera de Radiador',
      description: 'Hay una minima perdida de agua que debe ser revisada',
      status: false,
      level: LEVELS.BLOCKING
    }
  ]

  done: ITask[] = [
    {
      title: 'Cambio de cubiertas',
      description: 'Hace falta cambiar las cubiertas',
      status: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Cambio de Radiador',
      description: 'El radiador esta pinchado, hay que cambiarlo con urgencia.',
      status: true,
      level: LEVELS.URGENT
    },
    {
      title: 'Cambio de Bujías',
      description: 'Ya cumplieron varios años de funcionamiento, hace falta un cambio',
      status: true,
      level: LEVELS.INFO
    }
  ]

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      event.previousContainer.data[event.previousIndex].status = !event.previousContainer.data[event.previousIndex].status
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
