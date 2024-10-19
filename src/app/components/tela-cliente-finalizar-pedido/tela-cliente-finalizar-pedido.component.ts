import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InserirCpfComponent } from '../inserir-cpf/inserir-cpf.component';
import { InserirEnderecoComponent } from '../inserir-endereco/inserir-endereco.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tela-cliente-finalizar-pedido',
  standalone: true,
  imports: [MatIcon,
    NgClass
  ],
  templateUrl: './tela-cliente-finalizar-pedido.component.html',
  styleUrl: './tela-cliente-finalizar-pedido.component.css'
})
export class TelaClienteFinalizarPedidoComponent {
  enderecoSalvo: any = null;
  cpfSalvo: string = '';
  isButtonEnabled: boolean = false;

  constructor(private dialog: MatDialog, private router: Router) {}

  abrirDialogCpf(): void {
    const dialogRef = this.dialog.open(InserirCpfComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cpfSalvo = result;
        this.verificarCampos();
      }
    });
  }

  abrirDialogoInserirEndereco(): void {
    const dialogRef = this.dialog.open(InserirEnderecoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.enderecoSalvo = result;
        this.verificarCampos();
      }
    });
  }

  verificarCampos(): void {
    // Verifica se ambos o CPF e o Endereço foram preenchidos
    if (this.cpfSalvo && this.enderecoSalvo) {
      this.isButtonEnabled = true;
    } else {
      this.isButtonEnabled = false;
    }
  }

  navegarParaOutroComponente() {
    if (this.isButtonEnabled) {
      this.router.navigate(['/acompanhar-pedido']);
    }
  }
}
