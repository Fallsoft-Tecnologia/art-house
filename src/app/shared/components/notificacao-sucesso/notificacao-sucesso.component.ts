import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificacaoSucessoService } from './notificacao-sucesso.service';

@Component({
  selector: 'app-notificacao-sucesso',
  templateUrl: './notificacao-sucesso.component.html',
  styleUrls: ['./notificacao-sucesso.component.css']
})
export class NotificacaoSucessoComponent implements OnInit {
  @Input() mensagem: string = '';

  constructor(private notificacaoService: NotificacaoSucessoService) {
    this.notificacaoService.notificacao$.subscribe((mensagem: string) => {
      this.mensagem = mensagem;
      setTimeout(() => {
        this.fecharNotificacao();
      }, 3000);
    });
  }

  ngOnInit(): void {
  }

  fecharNotificacao() {
    this.mensagem = '';
  }

}
