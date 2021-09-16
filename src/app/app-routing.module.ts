import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {
    path: 'inicio',
    loadChildren: () => import('./pagina-inicial/pagina-inicial-routing.module').then(m => m.PaginaInicialRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
