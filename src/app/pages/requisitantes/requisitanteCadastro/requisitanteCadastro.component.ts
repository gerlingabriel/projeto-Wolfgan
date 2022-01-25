import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { RequisitantesService } from './../requisitantes.service';
import { Itens, Produto } from './itens';
import { MatTable, MatTableDataSource } from '@angular/material/table';


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-requisitanteCadastro',
  templateUrl: './requisitanteCadastro.component.html',
  styleUrls: ['./requisitanteCadastro.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
})
export class RequisitanteCadastroComponent implements OnInit {

  itensPesquisaPreco: any = [];
  displayedColumns: string[] = ['id', 'produto', 'precoUnitario', 'quantidade'];
  contadorId: number = 1;

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogDataDialog);

    return dialogRef.afterClosed().subscribe(response => {
      this.addRowData(response.data);

    });
  }

  addRowData(data: Itens){

    this.itensPesquisaPreco.push({

      id:this.contadorId,
      precoUnitario:data.precoUnitario,
      produto:data.produto,
      quantidade:data.quantidade

    });
    this.contadorId++;
    this.table.renderRows();
  }

  add(){
    
  }
}

@Component({
  selector: 'dialog-data-dialog',
  templateUrl: 'DialogDataDialog.html',
  styleUrls: ['./requisitanteCadastro.component.css']
})
export class DialogDataDialog implements OnInit{

  listaProdutos: Produto[]= [];

  addProduto = new Produto();

  itens = new Itens();

  constructor(private servicos: RequisitantesService,
    private dialogRef: MatDialogRef<RequisitanteCadastroComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Itens) { }

  ngOnInit(): void {
    this.servicos.buscarProdutos().subscribe( (datar => {
      this.listaProdutos = datar;
    }))
  }

  addItens(){
    this.dialogRef.close({data:this.itens});
  }

}
