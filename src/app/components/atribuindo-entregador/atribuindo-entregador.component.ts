import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-atribuindo-entregador',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  templateUrl: './atribuindo-entregador.component.html',
  styleUrl: './atribuindo-entregador.component.css'
})
export class AtribuindoEntregadorComponent {

}
