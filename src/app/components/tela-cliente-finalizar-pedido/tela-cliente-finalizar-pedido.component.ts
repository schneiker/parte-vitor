import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InserirCpfComponent } from '../inserir-cpf/inserir-cpf.component';
import { InserirEnderecoComponent } from '../inserir-endereco/inserir-endereco.component';

@Component({
  selector: 'app-tela-cliente-finalizar-pedido',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './tela-cliente-finalizar-pedido.component.html',
  styleUrl: './tela-cliente-finalizar-pedido.component.css'
})
export class TelaClienteFinalizarPedidoComponent {
  enderecoSalvo: any = null;
  cpfSalvo: string = '';

  constructor(private dialog: MatDialog,  private router: Router) {}

  abrirDialogCpf(): void {
    const dialogRef = this.dialog.open(InserirCpfComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cpfSalvo = result;
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
      }
    });
  }

  navegarParaOutroComponente() {
    this.router.navigate(['/acompanhar']);
  }
}
