import { Component } from '@angular/core';
import { PedidoStatusService } from '../pedido-status.service';

@Component({
  selector: 'app-cliente-confirmar-entrega',
  standalone: true,
  imports: [],
  templateUrl: './cliente-confirmar-entrega.component.html',
  styleUrl: './cliente-confirmar-entrega.component.css'
})
export class ClienteConfirmarEntregaComponent {
  constructor(private pedidoStatusService: PedidoStatusService) {}

  pedidoConcluido() {
    this.pedidoStatusService.atualizarStatus('Pedido concluído');
  }
}
