import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';
import { CadastroPapelDeParedeComponent } from './cadastro-papel-de-parede.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroPapelDeParedeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class CadastroPapelDeParedeModule { }
