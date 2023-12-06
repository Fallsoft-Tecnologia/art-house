import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PapeisDeParedeComponent } from './modules/papeis-de-parede/papeis-de-parede.component';
import { PersonalizadosComponent } from './modules/personalizados/personalizados.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'papeisdeparede', component: PapeisDeParedeComponent
  },
  {
    path:'personalizados', component: PersonalizadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
