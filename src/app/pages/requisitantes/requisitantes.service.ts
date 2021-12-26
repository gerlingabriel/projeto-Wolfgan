import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppConstants } from './../../AppConstants';


@Injectable({
  providedIn: 'root'
})
export class RequisitantesService {

  constructor(private http: HttpClient) { }

  buscarPesquisaDoRequisitanto(): Observable<any> {
    return this.http.get(AppConstants.baseServidor + "/pesquisaPrecos");
  }

  buscarPesquisaPrecoExpecifico(id: number): Observable<any> {
    return this.http.get(AppConstants.baseServidor + "/pesquisaPrecos/" +id);
  }

  buscarPesquisaPrecoPorNome(nome: string): Observable<any> {
    return this.http.get(AppConstants.baseServidor + "/pesquisaPrecos/pesquisaPorTitulo/" +nome);
  }

}
