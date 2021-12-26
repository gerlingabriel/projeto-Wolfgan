import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/pagina-inicial/pagina-inicial.module').then(m => m.PaginaInicialModule)
  },
  {
    path: 'requisitante',
    loadChildren: () => import('./pages/requisitantes/requisitantes.module').then(m => m.RequisitantesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

