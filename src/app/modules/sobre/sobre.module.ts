import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SobreModule { }
