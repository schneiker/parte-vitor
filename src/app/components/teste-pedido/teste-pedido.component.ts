import { Component, OnInit } from '@angular/core';
import { DishService, Dish } from '../../services/dish.service'; 
import { ActivatedRoute } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-teste-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teste-pedido.component.html',
  styleUrls: ['./teste-pedido.component.css']
})
export class TestePedidoComponent implements OnInit {
  dish: Dish | null = null;
  loading = true;
  id: string | null = null;

  constructor(
    private dishService: DishService,
    private pedidosService: PedidosService, // Adiciona o serviço de pedidos
    private route: ActivatedRoute, 
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.dishService.getDish(this.id).subscribe( 
        data => {
          this.dish = data;
          this.loading = false;
        },
        error => {
          console.error('Erro ao carregar prato', error);
          this.loading = false;
        }
      );
    } else {
      console.error('ID não fornecido na rota');
      this.loading = false;
    }
  }

  addToCart(): void {
    if (this.dish) {
      this.pedidosService.addToCart(this.dish).subscribe(
        (response) => {
          console.log('Prato adicionado ao carrinho:', response);
        },
        (error) => {
          console.error('Erro ao adicionar prato ao carrinho:', error);
        }
      );
    } else {
      console.error('Prato não encontrado para adicionar ao carrinho');
    }
  }
}
