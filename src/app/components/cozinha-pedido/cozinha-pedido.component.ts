import { Component, OnInit, Input } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cozinha-pedido',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './cozinha-pedido.component.html',
  styleUrl: './cozinha-pedido.component.css'
})
export class CozinhaPedidoComponent {
  @Input() pedido: any; // Recebe um único pedido como entrada

  constructor(private pedidoService: PedidoService) {}

  finalizarPedido(id: number): void {
    if (this.pedido && this.pedido.id === id) {
      this.pedido.status = 'aguardando entrega';
      console.log('Finalizando pedido com ID:', id);

      this.pedidoService.updatePedido(id, this.pedido).subscribe(() => {
        console.log('Pedido atualizado com sucesso:', this.pedido);
      }, (error) => {
        console.error('Erro ao atualizar o pedido:', error);
      });
    }
  }
}