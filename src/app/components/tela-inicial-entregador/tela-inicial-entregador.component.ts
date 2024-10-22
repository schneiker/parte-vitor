import { Component } from '@angular/core';
import { EntregaRecebidaComponent } from '../entrega-recebida/entrega-recebida.component';
import { NgIf } from '@angular/common';
import { EntregaService } from '../../entrega.service';  // Importa o service

@Component({
  selector: 'app-tela-inicial-entregador',
  standalone: true,
  imports: [EntregaRecebidaComponent, NgIf],
  templateUrl: './tela-inicial-entregador.component.html',
  styleUrl: './tela-inicial-entregador.component.css'
})
export class TelaInicialEntregadorComponent {
  nome: boolean = true;  // Simula se há ou não pedidos

  constructor(private entregaService: EntregaService) {}

  ngOnInit(): void {
    // Inscreve-se para monitorar o estado da entrega
    this.entregaService.entregaAtiva$.subscribe(entregaAtiva => {
      this.nome = entregaAtiva;  // Atualiza a variável "nome" com o estado da entrega
    });
  }
}
