import { Component, OnInit } from '@angular/core';
import { DishService, Dish } from '../../services/dish.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {
  
  dish: Dish = { id: 0, name: '', description: '', price: 0, image: '', category: '' };
  isEdit = false;

  constructor(private dishService: DishService, private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.isEdit = true;
      this.dish = navigation.extras.state as Dish; 
    }
  }

  saveDish() {
    if (!this.dish.image) {
      alert('Por favor, insira uma URL de imagem válida.');
      return;
    }
  
    if (this.isEdit) {
      if (this.dish.id) {
        this.dishService.updateDish(this.dish.id, this.dish).subscribe(
          () => {
            alert('Prato atualizado com sucesso');
            this.router.navigate(['/dishes']);
          },
          (error) => {
            alert('Erro ao atualizar prato: ' + error);
          }
        );
      } else {
        alert('ID do prato não encontrado para atualização.');
      }
    } else {
      this.dishService.createDish(this.dish).subscribe(
        () => {
          alert('Prato adicionado com sucesso');
          this.router.navigate(['/dish-list']);
        },
        (error) => {
          alert('Erro ao adicionar prato: ' + error);
        }
      );
    }
  }
  
}
