import { Component, OnInit } from '@angular/core';
import { DishService, Dish } from '../../services/dish.service';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';


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

  constructor(private dishService: DishService, private router: Router) {}

  ngOnInit() {
    this.dishService.getDishesByCategory('porções').subscribe(data => {
      this.dishes = data; });
  }

  irParaExecutivo() {
    this.router.navigate(['/cardapio/executivos']);
  }

  irParaBebidas(){
    this.router.navigate(['/cardapio/bebidas'])
  }
}


