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

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private subtotal: number = 100;

  constructor() {
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
}