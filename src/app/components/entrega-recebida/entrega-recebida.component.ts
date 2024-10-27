import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogConfirmeOPagamentoComponent } from '../dialog-confirme-o-pagamento/dialog-confirme-o-pagamento.component';
import { InserirCodigoClienteComponent } from '../inserir-codigo-cliente/inserir-codigo-cliente.component';
import { PrevisaoDeEntregaComponent } from '../previsao-de-entrega/previsao-de-entrega.component';
import { FinalizarEntregaComponent } from '../finalizar-entrega/finalizar-entrega.component';  // Importação do novo diálogo
import { EntregaService  } from '../../entrega.service';
import { EntregadorInfoClienteEPedidoComponent } from '../entregador-info-cliente-e-pedido/entregador-info-cliente-e-pedido.component';

@Component({
  selector: 'app-entrega-recebida',
  standalone: true,
  imports: [NgIf, 
    RouterModule, 
    MatDialogModule, 
    DialogConfirmeOPagamentoComponent, 
    PrevisaoDeEntregaComponent,
    FinalizarEntregaComponent,
    EntregadorInfoClienteEPedidoComponent
  ],
  templateUrl: './entrega-recebida.component.html',
  styleUrl: './entrega-recebida.component.css'
})
export class EntregaRecebidaComponent {
  @Input() pedido: any;
  
  mostrarPrevisaoEntrega: boolean = true;
  mostrarDiaPagamento: boolean = false;
  esconderH2: boolean = false;
  pagamentoConfirmado: boolean = false;  // Nova variável para controle do estado do pagamento
  codigoClienteConfirmado: boolean = false;  // Nova variável para controlar a visibilidade

  constructor(public dialog: MatDialog,  private entregaService: EntregaService) {}

  openDialog(): void {
    if (!this.pagamentoConfirmado) {
      const dialogRef = this.dialog.open(InserirCodigoClienteComponent, {
        width: '396px',
        data: { cpf: this.pedido?.cpf, nomeCliente: this.pedido?.nomeCliente, numeroPedido: this.pedido?.numeroPedido }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 'codigoConfirmado') {
          this.codigoClienteConfirmado = true;
          this.abrirPagamentoDialog();
        }
      });
    } else {
      this.abrirFinalizacaoDialog();
    }
  }

  abrirPagamentoDialog(): void {
    const dialogRef = this.dialog.open(DialogConfirmeOPagamentoComponent, {
      width: '396px',
      disableClose: true 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'pagamentoConfirmado') {
        this.pagamentoConfirmado = true;
        this.mostrarPrevisaoEntrega = false;
        this.mostrarDiaPagamento = true;
        this.esconderH2 = true;
      }
    });
  }

  abrirFinalizacaoDialog(): void {
    const dialogRef = this.dialog.open(FinalizarEntregaComponent, {
      width: '396px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'entregaFinalizada') {
        this.entregaService.finalizarEntrega();
      }
    });
  }

  finalizarEntrega(): void {
    // Aqui você pode fazer a lógica para limpar os dados da entrega
    this.mostrarPrevisaoEntrega = false;
    this.mostrarDiaPagamento = false;
    this.esconderH2 = true;
  }

  abrirRota() {
    window.open('https://www.google.com/maps/dir///@-23.6517833,-46.7962328,15z/data=!4m4!4m3!1m1!4e2!1m0?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  }
}