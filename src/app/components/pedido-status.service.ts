// pedido-status.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Isso permite que o serviço seja injetado em toda a aplicação
})
export class PedidoStatusService {
  // O estado do pedido
  private statusSubject = new BehaviorSubject<string>('Pedido sendo preparado');
  
  // Observable que os componentes podem se inscrever para acompanhar o status
  status$: Observable<string> = this.statusSubject.asObservable();

  // Função para atualizar o status
  atualizarStatus(novoStatus: string) {
    this.statusSubject.next(novoStatus);  // Atualiza o status com o novo valor
  }
}
