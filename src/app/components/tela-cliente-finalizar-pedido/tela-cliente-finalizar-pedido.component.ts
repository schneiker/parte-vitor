import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InserirCpfComponent } from '../inserir-cpf/inserir-cpf.component';
import { InserirEnderecoComponent } from '../inserir-endereco/inserir-endereco.component';
import { PedidoService } from '../pedido.service';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-cliente-finalizar-pedido',
  standalone: true,
  imports: [MatIcon, NgClass, CommonModule],
  templateUrl: './tela-cliente-finalizar-pedido.component.html',
  styleUrl: './tela-cliente-finalizar-pedido.component.css'
})
export class TelaClienteFinalizarPedidoComponent implements OnInit {
  enderecoSalvo: any = null;
  cpfSalvo: string = '';
  isButtonEnabled: boolean = false;
  subtotal: number = 0;
  taxaEntrega: number = 15;
  total: number = 0;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.subtotal = this.pedidoService.getSubtotal();
    console.log('Subtotal obtido:', this.subtotal);
    this.calcularTotal();
  }

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
    if (this.cpfSalvo && this.enderecoSalvo) {
      this.isButtonEnabled = true;
    } else {
      this.isButtonEnabled = false;
    }
  }

  calcularTotal(): void {
    this.total = this.subtotal + this.taxaEntrega;
  }

  navegarParaOutroComponente() {
    if (this.isButtonEnabled) {
      this.router.navigate(['/acompanhar-pedido']);
    }
  }
}