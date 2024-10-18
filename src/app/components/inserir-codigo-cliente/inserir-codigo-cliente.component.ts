import { Component } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogConfirmeOPagamentoComponent } from '../dialog-confirme-o-pagamento/dialog-confirme-o-pagamento.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-codigo-cliente',
  standalone: true,
  imports: [MatDialogModule,
    CommonModule
  ],
  templateUrl: './inserir-codigo-cliente.component.html',
  styleUrl: './inserir-codigo-cliente.component.css'
})
export class InserirCodigoClienteComponent {
  isButtonActive: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<InserirCodigoClienteComponent>,
    public dialog: MatDialog
  ) {}

  limitDigits(event: any) {
    const input = event.target;
    if (input.value.length > 5) {
      input.value = input.value.slice(0, 5);
    }
  }

  onInputChange(event: any): void {
    const inputValue = event.target.value;

    this.isButtonActive = inputValue.length > 4;
  }

  abrirDiaPagCon(): void {
    const dialogRef = this.dialog.open(DialogConfirmeOPagamentoComponent, {
      width: '396px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

  fecharDialogo(): void {
    this.dialogRef.close('confirmado');
  }
}
