import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CardsComponent } from './cards/cards.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PapeisDeParedeComponent } from './papeis-de-parede.component';

@NgModule({
  declarations: [
    PapeisDeParedeComponent,
    CabecalhoComponent,
    CardsComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PapeisDeParedeModule {}
