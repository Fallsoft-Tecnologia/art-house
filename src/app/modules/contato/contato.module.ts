import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContatoComponent,
    ContatoFormComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class ContatoModule { }
