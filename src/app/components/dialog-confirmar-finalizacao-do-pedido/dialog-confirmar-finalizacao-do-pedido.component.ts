import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmar-finalizacao-do-pedido',
  standalone: true,
  imports: [],
  templateUrl: './dialog-confirmar-finalizacao-do-pedido.component.html',
  styleUrl: './dialog-confirmar-finalizacao-do-pedido.component.css'
})
export class DialogConfirmarFinalizacaoDoPedidoComponent {
  constructor(public dialogRef: MatDialogRef<DialogConfirmarFinalizacaoDoPedidoComponent>) {}

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}