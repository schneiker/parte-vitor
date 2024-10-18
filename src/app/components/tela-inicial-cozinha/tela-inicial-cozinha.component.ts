import { Component } from '@angular/core';
import { CozinhaPedidoComponent } from '../cozinha-pedido/cozinha-pedido.component';

@Component({
  selector: 'app-tela-inicial-cozinha',
  standalone: true,
  imports: [CozinhaPedidoComponent],
  templateUrl: './tela-inicial-cozinha.component.html',
  styleUrl: './tela-inicial-cozinha.component.css'
})
export class TelaInicialCozinhaComponent {

}
