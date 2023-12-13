import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { HomeComponent } from './home.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [
    CarrosselComponent,
    HomeComponent,
    LancamentosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class HomeModule {}
