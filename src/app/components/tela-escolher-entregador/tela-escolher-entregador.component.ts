import { Component } from '@angular/core';
import { EntregadoresComponent } from '../entregadores/entregadores.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tela-escolher-entregador',
  standalone: true,
  imports: [EntregadoresComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSlideToggleModule,
    RouterLink, RouterOutlet
  ],
  templateUrl: './tela-escolher-entregador.component.html',
  styleUrl: './tela-escolher-entregador.component.css'
})
export class TelaEscolherEntregadorComponent {
}
