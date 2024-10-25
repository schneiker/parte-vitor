// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class PedidoService {
//   private subtotal: number = 0;

//   constructor() {}

//   setSubtotal(subtotal: number): void {
//     this.subtotal = subtotal;
//   }

//   getSubtotal(): number {
//     return this.subtotal;
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:3000/pedidos';  // URL da API fake
  private subtotal: number = 100;

  constructor(private http: HttpClient) {
    this.simularPedidoFicticio(); // Chama a simulação do pedido fictício no início
  }

  // Funções relacionadas ao subtotal
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

  // Funções relacionadas à manipulação de pedidos com a API fake
  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPedido(pedido: any): Observable<any> {
    const horarioAtual = new Date().toISOString(); // Captura o horário atual
    const pedidoComHorario = { ...pedido, horario: horarioAtual };
    return this.http.post<any>(this.apiUrl, pedidoComHorario);
  }

  updatePedido(id: number, pedidoAtualizado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pedidoAtualizado);
  }
  
  aceitarPedido(id: number): Observable<any> {
    const horarioAtual = new Date().toISOString(); // Captura a data atual
    
    // Busca o pedido completo antes de atualizar
    return this.getPedidoById(id).pipe(
      map(pedido => ({
        ...pedido, // Mantém os dados do pedido
        status: 'em preparo',
        horario: horarioAtual // Atualiza o horário
      })),
      switchMap(pedidoAtualizado => this.updatePedido(id, pedidoAtualizado))
    );
  }
  
  // Função auxiliar para buscar o pedido pelo ID
  getPedidoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletePedido(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }  
}
