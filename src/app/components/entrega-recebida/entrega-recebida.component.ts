import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogConfirmeOPagamentoComponent } from '../dialog-confirme-o-pagamento/dialog-confirme-o-pagamento.component';
import { InserirCodigoClienteComponent } from '../inserir-codigo-cliente/inserir-codigo-cliente.component';
import { PrevisaoDeEntregaComponent } from '../previsao-de-entrega/previsao-de-entrega.component';

@Component({
  selector: 'app-entrega-recebida',
  standalone: true,
  imports: [NgIf, RouterModule, MatDialogModule, DialogConfirmeOPagamentoComponent, PrevisaoDeEntregaComponent],
  templateUrl: './entrega-recebida.component.html',
  styleUrl: './entrega-recebida.component.css'
})
export class EntregaRecebidaComponent {
  mostrarPrevisaoEntrega: boolean = true;
  mostrarDiaPagamento: boolean = false;
  esconderH2: boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(InserirCodigoClienteComponent, {
      width: '396px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'codigoConfirmado') {
        this.abrirPagamentoDialog();
      }
    });
  }

  abrirPagamentoDialog(): void {
    const dialogRef = this.dialog.open(DialogConfirmeOPagamentoComponent, {
      width: '396px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'pagamentoConfirmado') {
        this.mostrarPrevisaoEntrega = false;
        this.mostrarDiaPagamento = true;
        this.esconderH2 = true;
      }
    });
  }

  abrirRota() {
    window.open('https://www.google.com/maps/dir///@-23.6517833,-46.7962328,15z/data=!4m4!4m3!1m1!4e2!1m0?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  }
}
