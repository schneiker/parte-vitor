import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inserir-cpf',
  standalone: true,
  imports: [MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    CommonModule],
  templateUrl: './inserir-cpf.component.html',
  styleUrl: './inserir-cpf.component.css'
})
export class InserirCpfComponent {
  cpf = '';

  constructor(public dialogRef: MatDialogRef<InserirCpfComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  formatarCpf(): void {
    let cpfApenasNumeros = this.cpf.replace(/\D/g, '');
    if (cpfApenasNumeros.length > 11) {
      cpfApenasNumeros = cpfApenasNumeros.slice(0, 11);
    }

    this.cpf = cpfApenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      .replace(/(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3')
      .replace(/(\d{3})(\d{1,3})/, '$1.$2');
  }

  validarCpf(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;
    }
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  confirmar(): void {
    const cpfSemFormatacao = this.cpf.replace(/\D/g, '');
    if (this.validarCpf(cpfSemFormatacao)) {
      this.dialogRef.close(this.cpf);
    } else {
      alert('CPF inválido! Tente novamente.');
    }
  }
}
