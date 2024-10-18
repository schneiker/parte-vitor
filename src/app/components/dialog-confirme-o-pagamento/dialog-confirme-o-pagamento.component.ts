import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirme-o-pagamento',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-confirme-o-pagamento.component.html',
  styleUrl: './dialog-confirme-o-pagamento.component.css'
})
export class DialogConfirmeOPagamentoComponent {
  constructor(public dialogRef: MatDialogRef<DialogConfirmeOPagamentoComponent>) {}

  fecharDialogo(): void {
    this.dialogRef.close('pagamentoConfirmado');
  }
}
