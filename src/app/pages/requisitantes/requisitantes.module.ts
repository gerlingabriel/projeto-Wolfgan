import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { DialogDataExampleDialog, RequisistantesComponent } from './requisistantes/requisistantes.component';
import { DialogDataDialog, RequisitanteCadastroComponent } from './requisitanteCadastro/requisitanteCadastro.component';
import { RequisitantesRoutingModule } from './requisitantes-routing.module';

@NgModule({
  declarations: [
    RequisistantesComponent,
    DialogDataExampleDialog,
    RequisitanteCadastroComponent,
    DialogDataDialog
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
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class RequisitantesModule {

 }
