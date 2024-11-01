import { Component, OnInit } from '@angular/core';
import { EntregaPedidoComponent } from '../entrega-pedido/entrega-pedido.component';
import { PedidoService } from '../pedido.service';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-tela-inicial-direcionamento-entrega',
  standalone: true,
  imports: [EntregaPedidoComponent, NgFor, NgForOf],
  templateUrl: './tela-inicial-direcionamento-entrega.component.html',
  styleUrl: './tela-inicial-direcionamento-entrega.component.css'
})
export class TelaInicialDirecionamentoEntregaComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe((data) => {
      this.pedidos = data
        .filter(pedido => pedido.status === 'aguardando entrega')
        .map((pedido) => {
          const horario = new Date(pedido.horario);
          return {
            ...pedido,
            horario: horario,
            tempo: this.calcularTempo(horario)
          };
        })
        .sort((a, b) => {
          // Ordena em ordem crescente pelo horário de chegada para "aguardando entrega"
          return new Date(a.horario).getTime() - new Date(b.horario).getTime();
        });
    });
  }

  calcularTempo(horario: Date): string {
    const agora = new Date();
    const diferenca = agora.getTime() - horario.getTime();
    const minutos = Math.floor(diferenca / 60000);
    return `${minutos} min`;
  }
}