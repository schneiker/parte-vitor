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
import { PedidoService } from '../pedido.service';

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
  pagamentoConfirmado: boolean = false;
  codigoClienteConfirmado: boolean = false;

  constructor(public dialog: MatDialog,  private entregaService: EntregaService,  private pedidoService: PedidoService) {}

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
      width: '396px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'entregaFinalizada') {
        this.finalizarEntrega();
      }
    });
  }

  finalizarEntrega(): void {
    this.mostrarPrevisaoEntrega = false;
    this.mostrarDiaPagamento = false;
    this.esconderH2 = true;

    this.atualizarStatusPedidoFinalizado();
  }

  atualizarStatusPedidoFinalizado(): void {
    if (this.pedido && this.pedido.id) {
      this.pedidoService.finalizarPedido(this.pedido.id).subscribe({
        next: () => {
          console.log('Status do pedido atualizado para "pedido finalizado"');
          // Verifica se há mais pedidos pendentes para o entregador atual
          this.pedidoService.getPedidoMaisAntigoParaEntregador(this.pedido.entregador).subscribe(pedidoMaisAntigo => {
            if (!pedidoMaisAntigo) {
              this.entregaService.finalizarEntrega(); // Atualiza o estado para "sem entrega"
            }
          });
        },
        error: (err) => console.error('Erro ao atualizar o status do pedido:', err)
      });
    }
  }

  abrirRota() {
    window.open('https://www.google.com/maps/dir///@-23.6517833,-46.7962328,15z/data=!4m4!4m3!1m1!4e2!1m0?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  }
}