import { Component, OnInit } from '@angular/core';
import { EntregaRecebidaComponent } from '../entrega-recebida/entrega-recebida.component';
import { NgIf } from '@angular/common';
import { EntregaService } from '../../entrega.service';  // Importa o service
import { PedidoService } from '../pedido.service';
import { ActivatedRoute } from '@angular/router';

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
  entregadorNome: string = '';

  constructor(private entregaService: EntregaService, private pedidoService: PedidoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtém o nome do entregador a partir do parâmetro de rota
    const nomeRota = this.route.snapshot.paramMap.get('nome');
    if (nomeRota) {
      // Formata o nome da rota para o formato correto (ex.: "geraldo-cruz" para "Geraldo Cruz")
      this.entregadorNome = this.formatarNome(nomeRota);
    }

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

  private formatarNome(nome: string): string {
    return nome
      .split('-')
      .map(parte => parte.charAt(0).toUpperCase() + parte.slice(1))
      .join(' ');
  }
}
