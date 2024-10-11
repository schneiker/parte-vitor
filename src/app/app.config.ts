import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule} from '@angular/router';
import { DishListComponent } from './components/dish-list/dish-list.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'cardapio', component: CardapioComponent },
  { path: 'add-dish', component: DishFormComponent },
  { path: 'dish-list/edit-dish/:id', component: DishFormComponent },
  {path: 'dish-list', component: DishListComponent},
  {path: 'dish-form', component: DishFormComponent},
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
};

