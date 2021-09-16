import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisitanteRoutingModule } from './requisitante-routing.module';
import { RequisitanteComponent } from './requisitante/requisitante.component';


@NgModule({
  declarations: [
    RequisitanteComponent
  ],
  imports: [
    CommonModule,
    RequisitanteRoutingModule
  ]
})
export class RequisitanteModule { }
