import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-finalizar-entrega',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './finalizar-entrega.component.html',
  styleUrl: './finalizar-entrega.component.css'
})
export class FinalizarEntregaComponent {
  constructor(public dialogRef: MatDialogRef<FinalizarEntregaComponent>) {}

  finalizarEntrega(): void {
    this.dialogRef.close('entregaFinalizada'); // Fechar o diálogo e sinalizar que a entrega foi finalizada
  }
}
