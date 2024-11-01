import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from './dish.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private cartUrl = 'http://localhost:3000/cart';
  private cartItems: Dish[] = []; 

  constructor(private http: HttpClient) {}

  addToCart(dish: Dish): Observable<Dish> {
    console.log('Adicionando ao carrinho:', dish);
    this.cartItems.push(dish); 
    return this.http.post<Dish>(this.cartUrl, dish);
  }

  getCartItems(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.cartUrl);
  }

  removeFromCart(id: string): Observable<void> {
    this.cartItems = this.cartItems.filter(dish => dish.id !== id); 
    return this.http.delete<void>(`${this.cartUrl}/${id}`);
  }

  clearCart(): Observable<void> {
    this.cartItems = []; 
    return this.http.delete<void>(this.cartUrl);
  }


  getSubtotal(): number {
    return this.cartItems.reduce((sum, dish) => sum + (dish.price || 0), 0);
  }
}
