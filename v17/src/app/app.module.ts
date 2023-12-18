import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ejemplo01Component } from './ejemplo01/ejemplo01.component';
import { Ejemplo02Component } from './ejemplo02/ejemplo02.component';
import { Ejemplo03Component } from './ejemplo03/ejemplo03.component';
import { Ejemplo04Component } from './ejemplo04/ejemplo04.component';
import { Ejemplo10Component } from './ejemplo10/ejemplo10.component';

@NgModule({
  declarations: [
    Ejemplo01Component,
    Ejemplo02Component,
    Ejemplo03Component,
    Ejemplo04Component,
    Ejemplo10Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class AppModule { }
