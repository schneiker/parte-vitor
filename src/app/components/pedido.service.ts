import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:3000/pedidos';
  private subtotal: number = 100;

  constructor(private http: HttpClient) {
    this.simularPedidoFicticio();
  }

  setSubtotal(subtotal: number): void {
    console.log('Subtotal setado no serviço:', subtotal);
    this.subtotal = subtotal;
  }

  getSubtotal(): number {
    return this.subtotal;
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
}
