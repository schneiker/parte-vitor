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
        .filter(pedido => pedido.status === 'em preparo')
        .map((pedido, index) => {
          const horario = new Date(pedido.horario);
          return {
            ...pedido,
            numeroPedido: index + 1,
            horario: horario,
            tempo: this.calcularTempo(horario)
          };
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