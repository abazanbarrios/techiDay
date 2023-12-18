import { Component, OnInit } from '@angular/core';
import { ITask } from './itask.interface';
import { StatusEnum } from './status.enum';

@Component({
  selector: 'app-ejemplo03',
  templateUrl: './ejemplo03.component.html',
  styleUrls: ['./ejemplo03.component.scss']
})
export class Ejemplo03Component implements OnInit {

  title = 'angular-course';
  tasks: ITask[] = [
    {id: 171, status: StatusEnum.Alta, description: 'Planear actividades',  date: '2022-04-01'},
    {id: 172, status: StatusEnum.Baja, description: 'Entrenamiento',  date: '2022-04-08'},
    {id: 173, status: StatusEnum.Media, description: 'Lectura',  date: '2022-04-12'},
    {id: 174, status: StatusEnum.Alta, description: 'Clases de Frances',  date: '2022-05-10'},
    {id: 175, status: StatusEnum.Baja, description: 'Natación',  date: '2022-05-13'},
    {id: 176, status: StatusEnum.Media, description: 'Pagar Facturas',  date: '2022-05-17'},
  ];

  /**
   * Track By Status task
   * @param index
   * @param task
   */
  trackByFn(index: number, task: ITask) {
    return task.status;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
