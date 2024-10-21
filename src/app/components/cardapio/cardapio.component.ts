import { Component, OnInit } from '@angular/core';
import { DishService, Dish } from '../../services/dish.service';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';


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

  constructor(private dishService: DishService, private router: Router, private location: Location) {}

  ngOnInit() {
    this.dishService.getDishesByCategory('porções').subscribe(data => {
      this.dishes = data; });
  }

  irParaExecutivo() {
    this.router.navigate(['/cardapio/executivos']);
  }

  irParaBebidas(){
    this.router.navigate(['/cardapio/bebidas']);
  }

  irParaPorcoes(){
    this.router.navigate(['/cardapio/porcoes'])
  }

  navegarParaPrato(id: string) {
    this.router.navigate(['/prato', id]);
  }

  voltar() {
    this.location.back();
  }

}


