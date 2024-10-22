import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntregaService {
  // BehaviorSubject para armazenar o estado da entrega (true se houver entrega, false se não houver)
  private entregaAtiva = new BehaviorSubject<boolean>(true);
  
  // Expor o estado da entrega como um Observable
  entregaAtiva$ = this.entregaAtiva.asObservable();

  // Método para finalizar a entrega
  finalizarEntrega() {
    this.entregaAtiva.next(false);  // Atualiza o estado para "sem entrega"
  }

  // Método para resetar o estado, se necessário
  iniciarNovaEntrega() {
    this.entregaAtiva.next(true);
  }
}
