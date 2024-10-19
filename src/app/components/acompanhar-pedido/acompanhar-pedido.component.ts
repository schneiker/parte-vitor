import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { PedidoStatusService } from '../pedido-status.service';

@Component({
  selector: 'app-acompanhar-pedido',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './acompanhar-pedido.component.html',
  styleUrl: './acompanhar-pedido.component.css'
})
export class AcompanharPedidoComponent {
  statusAtual: string = '';

  constructor(private pedidoStatusService: PedidoStatusService) {}

  ngOnInit(): void {
    // Assina as mudanças de status e atualiza o status atual
    this.pedidoStatusService.status$.subscribe((status) => {
      this.statusAtual = status;
    });
  }

  prepararPedido() {
    this.pedidoStatusService.atualizarStatus('Pedido sendo preparado');
  }

  pedidoEnviado() {
    this.pedidoStatusService.atualizarStatus('Pedido enviado para entrega');
  }

  pedidoConcluido() {
    this.pedidoStatusService.atualizarStatus('Pedido concluído');
  }
}
