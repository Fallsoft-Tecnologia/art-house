import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PapeisDeParedeComponent } from './papeis-de-parede.component';
import { FiltroModalComponent } from './filtro/filtro-modal/filtro-modal.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';

@NgModule({
  declarations: [
    PapeisDeParedeComponent,
    CabecalhoComponent,
    CardsComponent,
    FiltroComponent,
    FiltroModalComponent,
    PaginacaoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PapeisDeParedeModule {}
