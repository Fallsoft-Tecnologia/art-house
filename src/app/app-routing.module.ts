import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PapeisDeParedeComponent } from './modules/papeis-de-parede/papeis-de-parede.component';
import { PersonalizadosComponent } from './modules/personalizados/personalizados.component';
import { SobreComponent } from './modules/sobre/sobre.component';
import { ContatoComponent } from './modules/contato/contato.component';
import { CadastroPapelDeParedeComponent } from './cadastro-papel-de-parede/cadastro-papel-de-parede.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'papeisdeparede', component: PapeisDeParedeComponent
  },
  {
    path:'personalizados', component: PersonalizadosComponent
  },
  {
    path:'sobrenos', component: SobreComponent
  },
  {
    path:'contato', component: ContatoComponent
  },
  {
    path:'cadastro', component: CadastroPapelDeParedeComponent
  },
  { 
    path: '**', component: HomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
