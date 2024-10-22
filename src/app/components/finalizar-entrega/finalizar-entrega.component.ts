import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-finalizar-entrega',
  standalone: true,
  templateUrl: './finalizar-entrega.component.html',
  styleUrl: './finalizar-entrega.component.css'
})
export class FinalizarEntregaComponent {
  constructor(public dialogRef: MatDialogRef<FinalizarEntregaComponent>) {}

  finalizarEntrega(): void {
    this.dialogRef.close('entregaFinalizada');  // Sinaliza que a entrega foi finalizada
  }
}
