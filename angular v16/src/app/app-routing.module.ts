import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo01Component } from './ejemplo01/ejemplo01.component';
import { Ejemplo02Component } from './ejemplo02/ejemplo02.component';
import { Ejemplo03Component } from './ejemplo03/ejemplo03.component';
import { Ejemplo04Component } from './ejemplo04/ejemplo04.component';
import { Ejemplo05Component } from './ejemplo05/ejemplo05.component';
import { Ejemplo06Component } from './ejemplo06/ejemplo06.component';
import { Ejemplo07Component } from './ejemplo07/ejemplo07.component';
import { Ejemplo08Component } from './ejemplo08/ejemplo08.component';
import { Ejemplo09Component } from './ejemplo09/ejemplo09.component';
import { Ejemplo10Component } from './ejemplo10/ejemplo10.component';


const appRoutes: Routes = [
  { path: 'ejemplo01', component: Ejemplo01Component },
  { path: 'ejemplo02', component: Ejemplo02Component },
  { path: 'ejemplo03', component: Ejemplo03Component },
  { path: 'ejemplo04', component: Ejemplo04Component },
  { path: 'ejemplo05', component: Ejemplo05Component },
  { path: 'ejemplo06', component: Ejemplo06Component },
  { path: 'ejemplo07', component: Ejemplo07Component },
  { path: 'ejemplo08', component: Ejemplo08Component },
  { path: 'ejemplo09', component: Ejemplo09Component },
  { path: 'ejemplo10', component: Ejemplo10Component },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
