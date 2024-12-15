import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  nomeCliente: string;
  numeroPedido: number;
  cpfDoCliente: string;

  constructor(public dialogRef: MatDialogRef<InserirCodigoClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cpf: string, nomeCliente: string, numeroPedido: number }) 
    {
      this.nomeCliente = data.nomeCliente;
      this.numeroPedido = data.numeroPedido;
      this.cpfDoCliente = data.cpf;
    }

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
    const cpfNumerico = this.cpfDoCliente.replace(/\D/g, ''); // Remove pontos e traços
    return this.codigo === cpfNumerico.slice(0, 5); // Compara só os números
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
