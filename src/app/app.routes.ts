import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
import { TelaInicialCozinhaComponent } from './components/tela-inicial-cozinha/tela-inicial-cozinha.component';
import { TelaInicialDirecionamentoEntregaComponent } from './components/tela-inicial-direcionamento-entrega/tela-inicial-direcionamento-entrega.component';
import { TelaEscolherEntregadorComponent } from './components/tela-escolher-entregador/tela-escolher-entregador.component';
import { TelaInicialEntregadorComponent } from './components/tela-inicial-entregador/tela-inicial-entregador.component';
import { TelaClienteFinalizarPedidoComponent } from './components/tela-cliente-finalizar-pedido/tela-cliente-finalizar-pedido.component';
import { AcompanharPedidoComponent } from './components/acompanhar-pedido/acompanhar-pedido.component';
import { PainelEntregadorComponent } from './components/painel-entregador/painel-entregador.component';

export const routes: Routes = [
    { path: '', component: TelaClienteFinalizarPedidoComponent},
    { path: 'tela-cozinha', component: TelaInicialCozinhaComponent},
    { path: 'tela-dir-entrega', component: TelaInicialDirecionamentoEntregaComponent},
    { path: 'tela-escolher-entregador', component: TelaEscolherEntregadorComponent},
    { path: 'tela-entregador', component: TelaInicialEntregadorComponent},
    { path: 'tela-finalizar-pedido', component: TelaClienteFinalizarPedidoComponent},
    { path: 'acompanhar-pedido', component: AcompanharPedidoComponent},
    { path: 'tela-escolher-entregador/:numeroPedido', component: TelaEscolherEntregadorComponent},
    { path: 'painel-entregadores', component: PainelEntregadorComponent},
    { path: 'tela-inicial-entregador/:nome', component: TelaInicialEntregadorComponent }
];
>>>>>>> upstream/main
