import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Category  {
  name: string;
  dishes: Dish[];
}

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private apiUrl = 'http://192.168.5.106:3000/dishes';

  constructor(private http: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.apiUrl);
  }


  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(`${this.apiUrl}/${id}`);
  }

  createDish(dish: Dish): Observable<Dish> {
    dish.id = String(dish.id);
    return this.http.post<Dish>(this.apiUrl, dish);
  }


  updateDish(id: string, dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(`${this.apiUrl}/${id}`, dish);
  }

  deleteDish(id: string): Observable<Dish> {
    return this.http.delete<Dish>(`${this.apiUrl}/${id}`);
  }

  getDishesByCategory(category: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.apiUrl}?category=${category}`);
  }
}
