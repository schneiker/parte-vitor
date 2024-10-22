import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-codigo-cliente',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './inserir-codigo-cliente.component.html',
  styleUrl: './inserir-codigo-cliente.component.css'
})
export class InserirCodigoClienteComponent {
  isButtonActive: boolean = false;
  codigo: string = '';  // Para armazenar o código inserido pelo entregador
  cpfDoCliente = '12345678901';  // Aqui o CPF completo do cliente seria armazenado.

  constructor(public dialogRef: MatDialogRef<InserirCodigoClienteComponent>) {}

  limitDigits(event: any) {
    const input = event.target;
    if (input.value.length > 5) {
      input.value = input.value.slice(0, 5);
    }
  }

  onInputChange(event: any): void {
    this.codigo = event.target.value;
    this.isButtonActive = this.codigo.length === 5; // Ativa o botão com 5 dígitos
  }

  validarCodigo(): boolean {
    // Pega os 5 primeiros dígitos do CPF armazenado e compara com o código inserido
    return this.codigo === this.cpfDoCliente.slice(0, 5);
  }

  abrirDiaPagCon(): void {
    if (this.validarCodigo()) {
      this.dialogRef.close('codigoConfirmado'); // Código correto, fecha o diálogo com 'codigoConfirmado'
    } else {
      alert('Código incorreto, tente novamente.');
    }
  }

  fecharDialogo(): void {
    this.dialogRef.close();
  }
}
