import { Routes } from '@angular/router';
import { TelaInicialCozinhaComponent } from './components/tela-inicial-cozinha/tela-inicial-cozinha.component';
import { TelaInicialDirecionamentoEntregaComponent } from './components/tela-inicial-direcionamento-entrega/tela-inicial-direcionamento-entrega.component';
import { TelaEscolherEntregadorComponent } from './components/tela-escolher-entregador/tela-escolher-entregador.component';
import { TelaInicialEntregadorComponent } from './components/tela-inicial-entregador/tela-inicial-entregador.component';
import { TelaClienteFinalizarPedidoComponent } from './components/tela-cliente-finalizar-pedido/tela-cliente-finalizar-pedido.component';

export const routes: Routes = [
    { path: 'tela-cozinha', component: TelaInicialCozinhaComponent},
    { path: 'tela-dir-entrega', component: TelaInicialDirecionamentoEntregaComponent},
    { path: 'tela-escolher-entregador', component: TelaEscolherEntregadorComponent},
    { path: 'tela-entregador', component: TelaInicialEntregadorComponent},
    { path: 'tela-finalizar-pedido', component: TelaClienteFinalizarPedidoComponent}
];
