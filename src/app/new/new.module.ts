import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    NavComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabeceraComponent,
    NavComponent,
    BodyComponent
  ]
})
export class NewModule { }
