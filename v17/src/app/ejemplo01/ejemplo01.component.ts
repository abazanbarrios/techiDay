import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01',
  templateUrl: './ejemplo01.component.html',
  styleUrls: ['./ejemplo01.component.scss']
})
export class Ejemplo01Component implements OnInit {

  temperatura: number = Math.floor(Math.random() * 20 + 1);

  constructor() { }

  ngOnInit(): void {
  }

  incrementaValor(incremento: number) {
    this.temperatura += incremento;
  }

}
