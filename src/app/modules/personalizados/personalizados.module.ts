import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PersonalizadosComponent } from './personalizados.component';
import { CarrosselComponent } from './carrossel/carrossel.component';



@NgModule({
  declarations: [
    PersonalizadosComponent,
    CarrosselComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PersonalizadosModule { }
