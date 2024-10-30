import { Component } from '@angular/core';
import { OnInit } from '../../../../node_modules/@angular/core/index';
import { Router } from '../../../../node_modules/@angular/router/index';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {

  cart: CartDish[] = [];
  loading true;

  constructor(private pedidosService: PedidosService, router: Router)

  ngOnInit(){
      this.pedidosService.getCartItems().subscribe(data => {
        this.cart = data;
      });
  }

}
