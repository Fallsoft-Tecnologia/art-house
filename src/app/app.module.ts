import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivesComponent } from './shared/directives/directives.component';
import { WhatsappComponent } from './core/whatsapp/whatsapp.component';
import { ModalPromocaoComponent } from './shared/components/modal-promocao/modal-promocao.component';
import { HomeModule } from './modules/home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LeadDescontoFormComponent } from './shared/components/lead-desconto-form/lead-desconto-form.component';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NotificacaoSucessoComponent } from './shared/components/notificacao-sucesso/notificacao-sucesso.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DirectivesComponent,
    WhatsappComponent,
    ModalPromocaoComponent,
    LeadDescontoFormComponent,
    NotificacaoSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    ReactiveFormsModule,
    
    HomeModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
