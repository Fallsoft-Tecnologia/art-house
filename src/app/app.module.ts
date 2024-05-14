import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivesComponent } from './shared/directives/directives.component';
import { WhatsappComponent } from './core/whatsapp/whatsapp.component';
import { ComponentsModule } from './shared/components/components.module';
import { HomeModule } from './modules/home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PapeisDeParedeModule } from './modules/papeis-de-parede/papeis-de-parede.module';
import { NgbCollapse, NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonalizadosModule } from './modules/personalizados/personalizados.module';
import { SobreModule } from './modules/sobre/sobre.module';
import { ContatoModule } from './modules/contato/contato.module';
import { CadastroPapelDeParedeModule } from './cadastro-papel-de-parede/cadastro-papel-de-parede.module';
import { LoadingInterceptor } from './loading/loading-inteceptor.compont';
import { LoadingService } from './core/services/loading.service';
import { LoadingModalModule } from './loading-modal/loading-modal.module';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DirectivesComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    HomeModule,
    PapeisDeParedeModule,
    PersonalizadosModule,
    SobreModule,
    ContatoModule,
    CadastroPapelDeParedeModule,
    NgbCollapseModule,
    NgbModule,
    LoadingModalModule
  ],
  providers: [NgbCollapse,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
