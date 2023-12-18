import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Persona = {
  nombre: string;
  puesto: string;
  sueldo: number;
}

@Component({
  selector: 'app-ejemplo02',
  templateUrl: './ejemplo02.component.html',
  styleUrls: ['./ejemplo02.component.scss']
})
export class Ejemplo02Component implements OnInit {

  valor1!: number;
  valor2!: number;
  operacion: string = "ninguna";
  resultado!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
