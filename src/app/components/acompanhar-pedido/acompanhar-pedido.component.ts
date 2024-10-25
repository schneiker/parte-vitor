import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { PedidoStatusService } from '../pedido-status.service';
import { ClienteConfirmarEntregaComponent } from '../cliente-confirmar-entrega/cliente-confirmar-entrega.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-acompanhar-pedido',
  standalone: true,
  imports: [MatIconModule, ClienteConfirmarEntregaComponent, NgIf
  ],
  templateUrl: './acompanhar-pedido.component.html',
  styleUrl: './acompanhar-pedido.component.css'
})
export class AcompanharPedidoComponent {
  statusAtual: string = '';
  entregaConfirmada: boolean = false;  // Controle para esconder o componente de confirmação

  constructor(private pedidoStatusService: PedidoStatusService) {}

  ngOnInit(): void {
    // Assina as mudanças de status e atualiza o status atual
    this.pedidoStatusService.status$.subscribe((status) => {
      this.statusAtual = status;

      // Se o status for "Pedido concluído", marca como confirmado e remove o componente
      if (status === 'Pedido concluído') {
        this.entregaConfirmada = true;
      }
    });
  }

  prepararPedido() {
    this.pedidoStatusService.atualizarStatus('Pedido sendo preparado');
  }

  pedidoEnviado() {
    this.pedidoStatusService.atualizarStatus('Pedido enviado para entrega');
  }
}
