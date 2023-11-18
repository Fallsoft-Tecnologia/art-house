import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CardsComponent } from './cards/cards.component';
import { FiltroComponent } from './filtro/filtro.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    CardsComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabecalhoComponent,
    FiltroComponent
  ]
})
export class PapeisDeParedeModule { }
