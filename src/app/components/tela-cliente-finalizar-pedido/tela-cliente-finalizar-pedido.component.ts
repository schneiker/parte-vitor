import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InserirCpfComponent } from '../inserir-cpf/inserir-cpf.component';
import { InserirEnderecoComponent } from '../inserir-endereco/inserir-endereco.component';
import { PedidoService } from '../pedido.service';
import { NgClass, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InserirNomeComponent } from '../inserir-nome/inserir-nome.component';
import { Location } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-tela-cliente-finalizar-pedido',
  standalone: true,
  imports: [MatIcon, NgClass, CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './tela-cliente-finalizar-pedido.component.html',
  styleUrls: ['./tela-cliente-finalizar-pedido.component.css']
})
export class TelaClienteFinalizarPedidoComponent implements OnInit {
  enderecoSalvo: any = null;
  cpfSalvo: string = '';
  nomeSalvo: string = '';
  isButtonEnabled: boolean = false;
  subtotal: number = 0;
  taxaEntrega: number = 15;
  total: number = 0;
  observacao: string = '';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private pedidoService: PedidoService,
    private location: Location,
    private pedidosService: PedidosService
  ) {}

  ngOnInit(): void {
    this.pedidoService.atualizarSubtotal(); 
    this.subtotal = this.pedidoService.getSubtotal(); 
    console.log('Subtotal obtido:', this.subtotal);
    this.calcularTotal();
  }
  

  abrirDialogoInserirNome(): void {
    const dialogRef = this.dialog.open(InserirNomeComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.nomeSalvo = result;
        this.verificarCampos();
      }
    });
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
    this.isButtonEnabled = !!(this.cpfSalvo && this.enderecoSalvo && this.nomeSalvo);
  }

  calcularTotal(): void {
    this.total = this.subtotal + this.taxaEntrega;
  }

  navegarParaOutroComponente() {
    if (this.isButtonEnabled) {
      const novoPedido = {
        nomeCliente: this.nomeSalvo,
        itens: [], 
        preco: this.total,
        endereco: `${this.enderecoSalvo.logradouro}, ${this.enderecoSalvo.numero} - ${this.enderecoSalvo.bairro}`,
        cpf: this.cpfSalvo,
        observacao: this.observacao,
      };

      this.pedidoService.fazerPedido(novoPedido).subscribe(() => {
        this.router.navigate(['/acompanhar-pedido']);
      });
    }
  }

  ajustarAltura(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  voltar() {
    this.location.back();
  }
}
