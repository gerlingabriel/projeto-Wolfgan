import { Router } from '@angular/router';
import { Component, Inject, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { DetalhePesquisaPreco } from './detalhePesquisaPreco';
import { PesquisaPreco } from './pesquisaPreco';
import { RequisitantesService } from './../requisitantes.service';

@Component({
  selector: 'app-requisistantes',
  templateUrl: './requisistantes.component.html',
  styleUrls: ['./requisistantes.component.css']
})
export class RequisistantesComponent implements OnInit {

  // Nomes das columas
  displayedColumns: string[] = ['id', 'titulo', 'dataInicio', 'dataFim', 'botoes'];

  pesquisaPrecos: MatTableDataSource<PesquisaPreco>;

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort =  new MatSort();

  // dados
  requisitantes: any = [];

  detatlheItens: any;

  constructor(private serviceRequisitante: RequisitantesService, public dialog: MatDialog, private router: Router) {
    this.pesquisaPrecos = new MatTableDataSource();
   }

  ngOnInit() {
    this.serviceRequisitante.buscarPesquisaDoRequisitanto().subscribe( (data: any) =>{

      this.pesquisaPrecos = new MatTableDataSource(data);
      this.requisitantes = this.pesquisaPrecos;

      this.pesquisaPrecos.paginator = this.paginator;
      this.pesquisaPrecos.sort = this.sort;
    })
  }

  openDialog(id: number) {
    this.serviceRequisitante.buscarPesquisaPrecoExpecifico(id).subscribe( (data => {
      this.detatlheItens = data;

    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: this.detatlheItens
    });

    return dialogRef.afterClosed();
    }))
  }

  pesquisandoAoDigitar(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    if (filterValue !== "") {

      this.serviceRequisitante.buscarPesquisaPrecoPorNome(filterValue).subscribe( (data => {

        this.pesquisaPrecos = data;
        this.requisitantes = this.pesquisaPrecos;

      }))

    } else {
      this.ngOnInit();
    }
  }

  criarPesquisaPreco(){
    this.router.navigate(["requisitante/cadastroRequisitante"]);
  }

// Fim classe
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialogDialog.html',
})
export class DialogDataExampleDialog implements OnInit{

  dataDialog: any = this.data;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DetalhePesquisaPreco) {

  }

  ngOnInit(): void {
    console.log(this.data);
  }
}


