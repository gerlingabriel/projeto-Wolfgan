import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { RequisitantesService } from './../requisitantes.service';
import { Itens, Produto } from './itens';


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
  existeItens = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogDataDialog);

    return dialogRef.afterClosed();
  }

}

@Component({
  selector: 'dialog-data-dialog',
  templateUrl: 'DialogDataDialog.html',
  styleUrls: ['./requisitanteCadastro.component.css']
})
export class DialogDataDialog implements OnInit{

  listaProdutos: any;

  addProduto = new Produto();

  constructor(private servicos: RequisitantesService,
    private dialogRef: MatDialogRef<RequisitanteCadastroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Itens) { }

  ngOnInit(): void {
    this.servicos.buscarProdutos().subscribe( (datar => {
      this.listaProdutos = datar;
    }))
  }

  addItens(){
    this.itens.produto = this.listaProdutos;
    this.dialogRef.close(this.itens);
    console.log(this.itens);
  }

  itens = new Itens();

}
