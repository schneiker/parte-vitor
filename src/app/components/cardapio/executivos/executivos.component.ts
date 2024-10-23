import { Component, OnInit } from '@angular/core';
import { DishService } from '../../../services/dish.service';
import { Dish } from '../../../services/dish.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-executivos',
  standalone: true, 
  templateUrl: './executivos.component.html',
  styleUrls: ['./executivos.component.css'],
  imports: [CommonModule]

})
export class ExecutivosComponent implements OnInit {
  dishes: any[] = [];
  loading = true;

  constructor(private dishService: DishService, private location: Location, private router: Router) {}

  ngOnInit() {
    this.dishService.getDishesByCategory('executivos').subscribe(data => {
      this.dishes = data;
      this.loading = false;
    }, error => {
      console.error('Erro ao carregar pratos', error);
      this.loading = false;
    });

 }

 verDetalhes(id: number | undefined) {
  if (id !== undefined) {
      this.router.navigate(['/cardapio/fazer-pedido', id.toString()]); 
  } else {
      console.error('ID do prato não encontrado');
  }
}

 voltar() {
  this.location.back();
 }
  
}
