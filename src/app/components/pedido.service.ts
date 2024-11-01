import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PedidosService } from '../services/pedidos.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:3000/pedidos';
  private subtotal: number = 0;

  constructor(private http: HttpClient, private pedidosService: PedidosService) {
    this.atualizarSubtotal();
  }

  setSubtotal(subtotal: number): void {
    console.log('Subtotal setado no serviço:', subtotal);
    this.subtotal = subtotal;
  }

  getSubtotal(): number {
    return this.subtotal;
  }

  atualizarSubtotal(): void {
    this.pedidosService.getCartItems().subscribe(items => {
      const subtotalCalculado = items.reduce((sum, item) => sum + (item.price || 0), 0);
      this.setSubtotal(subtotalCalculado);
    });
  }

  simularPedidoFicticio(): void {
    const subtotalFicticio = 100;
    this.setSubtotal(subtotalFicticio);
    console.log('Pedido fictício simulado com subtotal de: R$' + subtotalFicticio);
  }

  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPedido(pedido: any): Observable<any> {
    const horarioAtual = new Date().toISOString();
    const pedidoComHorario = { ...pedido, horario: horarioAtual };
    return this.http.post<any>(this.apiUrl, pedidoComHorario);
  }

  updatePedido(id: number, pedidoAtualizado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pedidoAtualizado);
  }
  
  aceitarPedido(id: number): Observable<any> {
    const horarioAtual = new Date().toISOString();
    
    return this.getPedidoById(id).pipe(
      map(pedido => ({
        ...pedido,
        status: 'em preparo',
        horario: horarioAtual
      })),
      switchMap(pedidoAtualizado => this.updatePedido(id, pedidoAtualizado))
    );
  }
  
  getPedidoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletePedido(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  atribuirEntregadorAoPedido(id: number, entregadorNome: string): Observable<any> {
    const pedidoAtualizado = {
      entregador: entregadorNome,
      status: 'pedido enviado para entrega'
    };
    return this.http.patch(`${this.apiUrl}/${id}`, pedidoAtualizado);
  }

  fazerPedido(pedido: any): Observable<any> {
    return this.getPedidos().pipe(
      map((pedidos) => {
        const ultimoPedido = pedidos.length ? pedidos[pedidos.length - 1] : null;
        const novoId = ultimoPedido ? +ultimoPedido.id + 1 : 1;
        const numeroPedido = ultimoPedido ? ultimoPedido.numeroPedido + 1 : 1;
        const horarioAtual = new Date().toISOString();

        return {
          ...pedido,
          id: String(novoId),
          numeroPedido: numeroPedido,
          horario: horarioAtual,
          status: 'não aceito',
          tempo: '',
          entregador: ''
        };
      }),
      switchMap((novoPedido) => this.http.post<any>(this.apiUrl, novoPedido))
    );
  }

  getPedidoMaisAntigoParaEntregador(entregador: string): Observable<any | null> {
    return this.getPedidos().pipe(
      map(pedidos => 
        pedidos
          .filter(pedido => pedido.entregador === entregador && pedido.status === 'pedido enviado para entrega')
          .sort((a, b) => new Date(a.horario).getTime() - new Date(b.horario).getTime()) // Ordena por data
      ),
      map(pedidosOrdenados => pedidosOrdenados.length ? pedidosOrdenados[0] : null) // Retorna o mais antigo ou null se não houver
    );
  }

  finalizarPedido(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { status: 'pedido finalizado' });
  }
  
}
