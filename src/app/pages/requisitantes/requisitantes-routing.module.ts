import { RequisitanteCadastroComponent } from './requisitanteCadastro/requisitanteCadastro.component';
import { RequisistantesComponent } from './requisistantes/requisistantes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RequisistantesComponent},
  { path: 'cadastroRequisitante', component: RequisitanteCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisitantesRoutingModule { }
