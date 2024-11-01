import { ApplicationConfig, Component, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { ExecutivosComponent } from './components/cardapio/executivos/executivos.component';
import { BebidasComponent } from './components/cardapio/bebidas/bebidas.component';
import { PorcoesComponent } from './components/cardapio/porcoes/porcoes.component';
import { TestePedidoComponent } from './components/teste-pedido/teste-pedido.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { TelaClienteFinalizarPedidoComponent } from './components/tela-cliente-finalizar-pedido/tela-cliente-finalizar-pedido.component';
import { TelaInicialCozinhaComponent } from './components/tela-inicial-cozinha/tela-inicial-cozinha.component';
import { TelaInicialDirecionamentoEntregaComponent } from './components/tela-inicial-direcionamento-entrega/tela-inicial-direcionamento-entrega.component';
import { TelaEscolherEntregadorComponent } from './components/tela-escolher-entregador/tela-escolher-entregador.component';
import { TelaInicialEntregadorComponent } from './components/tela-inicial-entregador/tela-inicial-entregador.component';
import { AcompanharPedidoComponent } from './components/acompanhar-pedido/acompanhar-pedido.component';
import { PainelEntregadorComponent } from './components/painel-entregador/painel-entregador.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'dish-form', component: DishFormComponent }, 
  { path: 'dish-form/:id', component: DishFormComponent }, 
  { path: 'dish-list', component: DishListComponent },
  { path: 'cardapio/executivos', component: ExecutivosComponent },
  { path: 'cardapio/bebidas', component: BebidasComponent },
  { path: 'cardapio/porcoes', component: PorcoesComponent },
  { path: 'cardapio/fazer-pedido/:id', component: TestePedidoComponent },
  { path: 'dish-list/edit-dish/:id', component: DishFormComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'finalizar-pedido', component: TelaClienteFinalizarPedidoComponent},
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), provideAnimationsAsync()
  ]
};

