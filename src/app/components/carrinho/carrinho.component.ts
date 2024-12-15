import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { CommonModule, Location } from '@angular/common';
import { Dish } from '../../services/dish.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  cart: Dish[] = [];
  loading: boolean = true;

  constructor(
    private pedidosService: PedidosService, 
    private router: Router, 
    private location: Location
  ) {}

  ngOnInit() {
    this.pedidosService.getCartItems().subscribe(
      data => {
        this.cart = data;
        this.loading = false; 
      },
      (error) => {
        console.error('Erro ao carregar os itens do carrinho', error);
        this.loading = false; 
      }
    );
  }

  removeFromCart(id: string) {
    this.pedidosService.removeFromCart(id).subscribe(
      () => {
        this.cart = this.cart.filter(dish => dish.id !== id);
      },
      (error) => {
        console.error('Erro ao remover o item do carrinho', error);
      }
    );
  }

  get total(): number {
    return this.cart.reduce((sum, dish) => sum + (dish.price || 0), 0);
  }

  voltar() {
    this.location.back();
  }

  finalizarPedido() {
    this.router.navigate(['finalizar-pedido']);
  }

  getSubtotal(): number {
    return this.pedidosService.getSubtotal(); 
  }
}
