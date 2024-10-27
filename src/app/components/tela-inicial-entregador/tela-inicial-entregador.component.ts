import { Component, OnInit } from '@angular/core';
import { EntregaRecebidaComponent } from '../entrega-recebida/entrega-recebida.component';
import { NgIf } from '@angular/common';
import { EntregaService } from '../../entrega.service';  // Importa o service
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-tela-inicial-entregador',
  standalone: true,
  imports: [EntregaRecebidaComponent, NgIf],
  templateUrl: './tela-inicial-entregador.component.html',
  styleUrl: './tela-inicial-entregador.component.css'
})
export class TelaInicialEntregadorComponent implements OnInit {
  nome: boolean = true;  // Simula se há ou não pedidos
  pedidoSelecionado: any;
  entregadorNome: string = 'Hugo Prado';

  constructor(private entregaService: EntregaService, private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.buscarPedidoMaisAntigo();
    // Inscreve-se para monitorar o estado da entrega
    this.entregaService.entregaAtiva$.subscribe(entregaAtiva => {
      this.nome = entregaAtiva;  // Atualiza a variável "nome" com o estado da entrega
    });
  }

  buscarPedidoMaisAntigo(): void {
    this.pedidoService.getPedidoMaisAntigoParaEntregador(this.entregadorNome).subscribe(pedido => {
      if (pedido) {
        this.pedidoSelecionado = pedido;
        this.nome = true; // Mostra o componente EntregaRecebidaComponent
      } else {
        this.nome = false; // Nenhum pedido para o entregador
      }
    });
  }
}
