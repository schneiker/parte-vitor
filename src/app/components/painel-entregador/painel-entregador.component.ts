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
    const cpfSemMascara = this.removerMascaraCpf(this.cpf); // Remove máscara do CPF

    this.entregadorService.getEntregadoresDisponiveis().subscribe(entregadores => {
      const entregador = entregadores.find(e => e.cpf.replace(/\D/g, '') === cpfSemMascara);

      if (entregador) {
        // Formata o nome para a URL e redireciona para o perfil do entregador
        const nomeFormatado = entregador.nome.toLowerCase().replace(/\s+/g, '-');
        this.router.navigate([`/tela-inicial-entregador/${nomeFormatado}`]);
      } else {
        this.erro = "CPF não encontrado. Verifique e tente novamente.";
      }
    });
  }

  private removerMascaraCpf(cpf: string): string {
    return cpf.replace(/\D/g, ''); // Remove tudo que não é dígito
  }
}