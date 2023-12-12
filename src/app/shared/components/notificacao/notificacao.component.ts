import { Component, Input, OnInit } from '@angular/core';
import { NotificacaoService, TipoNotificacao } from './notificacao.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {
  @Input() mensagem: string = '';
  @Input() tipo: TipoNotificacao = TipoNotificacao.Sucesso;

  get tipoClasse(): string {
    return this.tipo === TipoNotificacao.Sucesso ? 'success-toast' : 'error-toast';
  }

  constructor(private notificacaoService: NotificacaoService) {
    this.notificacaoService.notificacao$.subscribe((notificacao: { mensagem: string; tipo: any; }) => {
      this.mensagem = notificacao.mensagem;
      this.tipo = notificacao.tipo;
      setTimeout(() => {
        this.fecharNotificacao();
      }, 5000);
    });
  }


  ngOnInit(): void {
  }

  fecharNotificacao() {
    this.mensagem = '';
  }
}
