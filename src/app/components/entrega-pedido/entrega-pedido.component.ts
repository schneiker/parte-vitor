import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PedidoService } from '../pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entrega-pedido',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './entrega-pedido.component.html',
  styleUrl: './entrega-pedido.component.css'
})
export class EntregaPedidoComponent {
  @Input() pedido: any;

  constructor(private pedidoService: PedidoService) {}
}
