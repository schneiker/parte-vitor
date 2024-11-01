import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { PedidoService } from '../pedido.service';
import { Router } from '@angular/router';

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
  entregador: any;
  numeroPedido: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<AtribuindoEntregadorComponent>,
  private pedidoService: PedidoService,
  private router: Router) {
    this.entregador = data.entregador;
    this.numeroPedido = data.numeroPedido;
  }

  confirmarAtribuicao(): void {
    this.pedidoService.atribuirEntregadorAoPedido(this.numeroPedido, this.entregador.nome).subscribe({
      next: () => {
        console.log(`Pedido ${this.numeroPedido} atribuído ao entregador ${this.entregador.nome}`);
        this.dialogRef.close();
        setTimeout(() => {
          this.router.navigate(['/tela-dir-entrega']);
        }, 100);
      },
      error: (err) => {
        console.error('Erro ao atribuir entregador ao pedido:', err);
      }
    });
  }
}