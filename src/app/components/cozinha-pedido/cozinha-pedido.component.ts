import { Component, OnInit } from '@angular/core';
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
export class CozinhaPedidoComponent implements OnInit {
  pedidos: any[] = [];
  numeroPedido: number = 0;  // Número do pedido por dia
  intervalId: any;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpa o intervalo quando o componente for destruído
    }
  }

getPedidos(): void {
  this.pedidoService.getPedidos().subscribe((data) => {
    this.pedidos = data
      .filter(pedido => pedido.status === 'em preparo') // Exibe apenas pedidos em preparo
      .map((pedido, index) => {
        const horario = new Date(pedido.horario); // Converte a string para objeto Date
        return {
          ...pedido,
          numeroPedido: index + 1,
          horario: horario, // Agora é um objeto Date
          tempo: this.calcularTempo(horario) // Calcula o tempo
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

  atualizarTempos(): void {
    this.pedidos = this.pedidos.map((pedido) => ({
      ...pedido,
      tempo: this.calcularTempo(new Date(pedido.horario)) // Recalcula o tempo de cada pedido
    }));
  }
  
  finalizarPedido(id: number): void {
    console.log('Tentando finalizar pedido com ID:', id); // Verifique o ID sendo passado
  
    const pedidoAtualizado = this.pedidos.find(pedido => pedido.id === id);
    if (pedidoAtualizado) {
      pedidoAtualizado.status = 'aguardando entrega'; // Atualiza o status do pedido
  
      this.pedidoService.updatePedido(id, pedidoAtualizado).subscribe(() => {
        console.log('Pedido atualizado com sucesso:', pedidoAtualizado);
        this.pedidos = this.pedidos.filter(pedido => pedido.status === 'em preparo'); // Atualiza a lista na cozinha
      }, (error) => {
        console.error('Erro ao atualizar o pedido:', error); // Verifique se há algum erro
      });
    } else {
      console.error('Pedido não encontrado com ID:', id); // Verifique se o pedido está sendo encontrado
    }
  }
}
