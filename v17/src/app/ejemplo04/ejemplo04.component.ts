import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo04',
  templateUrl: './ejemplo04.component.html',
  styleUrls: ['./ejemplo04.component.scss']
})
export class Ejemplo04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numeros = [...Array(501).keys()]; 
}
