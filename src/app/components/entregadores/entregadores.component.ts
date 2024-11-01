import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AtribuindoEntregadorComponent } from '../atribuindo-entregador/atribuindo-entregador.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EntregadorService } from '../entregador.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-entregadores',
  standalone: true,
  imports: [MatDialogModule, NgFor],
  templateUrl: './entregadores.component.html',
  styleUrl: './entregadores.component.css'
})
export class EntregadoresComponent {
  @Input() entregador: any;
  @Input() numeroPedido: number | null = null;

  constructor(private matDialog: MatDialog) {}

  openDialog(entregador: any): void {
    this.matDialog.open(AtribuindoEntregadorComponent, {
      width: '350px',
      data: { entregador, numeroPedido: this.numeroPedido }
    });
  }
}