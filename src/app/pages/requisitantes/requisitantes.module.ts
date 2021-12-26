import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { DialogDataExampleDialog, RequisistantesComponent } from './requisistantes/requisistantes.component';
import { RequisitanteCadastroComponent } from './requisitanteCadastro/requisitanteCadastro.component';
import { RequisitantesRoutingModule } from './requisitantes-routing.module';




@NgModule({
  declarations: [
    RequisistantesComponent,
    DialogDataExampleDialog,
    RequisitanteCadastroComponent
  ],
  imports: [
    CommonModule,
    RequisitantesRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class RequisitantesModule { }
