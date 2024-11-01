<<<<<<< HEAD
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
  { path: 'carrinho', component: CarrinhoComponent } 
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), provideAnimationsAsync()
  ]
};

=======
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideHttpClient(withFetch()), provideAnimationsAsync()]
};
>>>>>>> upstream/main
