import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-inserir-endereco',
  standalone: true,
  imports: [MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    CommonModule, 
    HttpClientModule, 
    NgIf],
  templateUrl: './inserir-endereco.component.html',
  styleUrl: './inserir-endereco.component.css'
})
export class InserirEnderecoComponent {
  cep = '';
  logradouro = '';
  numero = '';
  complemento = '';
  bairro = '';
  cidade = '';
  estado = '';

  constructor(
    public dialogRef: MatDialogRef<InserirEnderecoComponent>,
    private http: HttpClient  // Injetando o HttpClient
  ) {}

  // Método para cancelar o diálogo
  onCancel(): void {
    this.dialogRef.close();
  }

  buscarCep(): void {
    // Remove qualquer caractere que não seja número (incluindo o hífen)
    const cepLimpo = this.cep.replace(/\D/g, '');  // Expressão regular que remove tudo que não é dígito
  
    // Verifica se o CEP tem 8 caracteres após a limpeza
    if (cepLimpo.length === 8) {
      this.http.get<any>(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .subscribe(
          (response) => {
            if (!response.erro) {
              // Preenche os campos com os dados da API
              this.logradouro = response.logradouro;
              this.bairro = response.bairro;
              this.cidade = response.localidade;
              this.estado = response.uf;
            } else {
              alert('CEP não encontrado!');
            }
          },
          (error) => {
            console.error('Erro ao buscar o CEP:', error);
            alert('Erro ao buscar o CEP!');
          }
        );
    }
  }
}
