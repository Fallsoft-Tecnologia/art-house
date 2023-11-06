import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';



@NgModule({
  declarations: [
    CarrosselComponent,
    HomeComponent,
    BannerComponent,
    LancamentosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
