import { Component, OnInit } from '@angular/core';
import { CozinhaPedidoComponent } from '../cozinha-pedido/cozinha-pedido.component';
import { PedidoService } from '../pedido.service';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-tela-inicial-cozinha',
  standalone: true,
  imports: [CozinhaPedidoComponent, NgFor, NgForOf],
  templateUrl: './tela-inicial-cozinha.component.html',
  styleUrl: './tela-inicial-cozinha.component.css'
})
export class TelaInicialCozinhaComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe((data) => {
      this.pedidos = data
        .filter(pedido => pedido.status === 'não aceito' || pedido.status === 'em preparo')
        .map((pedido, index) => {
          const horario = new Date(pedido.horario);
          return {
            ...pedido,
            numeroPedido: index + 1,
            horario: horario,
            tempo: this.calcularTempo(horario)
          };
        })
        .sort((a, b) => {
          // Ordena os pedidos "em preparo" por horário (ordem crescente)
          if (a.status === 'em preparo' && b.status === 'em preparo') {
            return new Date(a.horario).getTime() - new Date(b.horario).getTime();
          }
          // Move pedidos "em preparo" acima dos "não aceito"
          if (a.status === 'em preparo') return -1;
          if (b.status === 'em preparo') return 1;
  
          // Para os "não aceito", preserva a ordem de horário
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