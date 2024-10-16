import { Component, OnInit } from '@angular/core';
import { DishService } from '../../../services/dish.service';
import { Dish } from '../../../services/dish.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bebidas',
  standalone: true, 
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css'],
  imports: [CommonModule]

})
export class BebidasComponent implements OnInit {
  dishes: any[] = [];
  loading = true;

  constructor(private dishService: DishService) {}

  ngOnInit() {
    this.dishService.getDishesByCategory('bebidas').subscribe(data => {
      this.dishes = data;
      this.loading = false;
    }, error => {
      console.error('Erro ao carregar pratos', error);
      this.loading = false;
    });
  }
  
}
