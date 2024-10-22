import { Component } from '@angular/core';
import { EntregaRecebidaComponent } from '../entrega-recebida/entrega-recebida.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tela-inicial-entregador',
  standalone: true,
  imports: [EntregaRecebidaComponent, NgIf],
  templateUrl: './tela-inicial-entregador.component.html',
  styleUrl: './tela-inicial-entregador.component.css'
})
export class TelaInicialEntregadorComponent {
  nome: boolean = true;  // Simula se há ou não pedidos

  // Método chamado para finalizar a entrega
  finalizarPedido(): void {
    this.nome = false;  // Simula o fim da entrega
  }
}
