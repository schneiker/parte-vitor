import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntregadorService } from '../entregador.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-painel-entregador',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './painel-entregador.component.html',
  styleUrl: './painel-entregador.component.css'
})
export class PainelEntregadorComponent {
  cpf: string = '';
  erro: string | null = null;

  constructor(private entregadorService: EntregadorService, private router: Router) {}

  verificarCpf() {
    const cpfSemMascara = this.removerMascaraCpf(this.cpf);

    if (!this.validarCpf(cpfSemMascara)) {
      this.erro = "CPF inválido. Verifique e tente novamente.";
      return;
    }

    this.entregadorService.getEntregadoresDisponiveis().subscribe(entregadores => {
      const entregador = entregadores.find(e => e.cpf.replace(/\D/g, '') === cpfSemMascara);

      if (entregador) {
        const nomeFormatado = entregador.nome.toLowerCase().replace(/\s+/g, '-');
        this.router.navigate([`/tela-inicial-entregador/${nomeFormatado}`]);
        this.erro = null; // Limpa a mensagem de erro ao redirecionar
      } else {
        this.erro = "CPF não encontrado. Verifique e tente novamente.";
      }
    });
  }

  formatarCpf() {
    let cpfNumeros = this.removerMascaraCpf(this.cpf);
    if (cpfNumeros.length > 11) {
      cpfNumeros = cpfNumeros.substring(0, 11);
    }
    
    this.cpf = cpfNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    
    // Exibe a mensagem de erro apenas quando o CPF tiver 11 dígitos e for inválido
    if (cpfNumeros.length === 11 && !this.validarCpf(cpfNumeros)) {
      this.erro = "CPF inválido. Certifique-se de que não é uma sequência repetitiva e possui 11 dígitos.";
    } else {
      this.erro = null; // Limpa a mensagem de erro se o CPF se tornar válido ou incompleto
    }
  }

  public removerMascaraCpf(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }

  public validarCpf(cpf: string): boolean {
    return cpf.length === 11 && !/^(\d)\1+$/.test(cpf); // Verifica 11 dígitos e evita sequência repetitiva
  }
}