import { Component, OnInit } from '@angular/core';
import { DishService, Dish } from '../../services/dish.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'] 
})
export class CardapioComponent implements OnInit {
  dishes: Dish[] = [];
  loading = true;

  constructor(private dishService: DishService) {}

  ngOnInit() {
    this.dishService.getDishes().subscribe(data => {
      this.dishes = data;
      this.loading = false;
    }, error => {
      console.error('Erro ao carregar pratos', error);
      this.loading = false;
    });
  }
}


