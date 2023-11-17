import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum TipoNotificacao {
  Sucesso = 'sucesso',
  Erro = 'erro',
  // Adicione outros tipos conforme necessário
}

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  private notificacaoSubject = new Subject<{ mensagem: string; tipo: TipoNotificacao }>();

  notificacao$ = this.notificacaoSubject.asObservable();

  mostrarNotificacao(mensagem: string, tipo: TipoNotificacao = TipoNotificacao.Sucesso) {
    this.notificacaoSubject.next({ mensagem, tipo });
  }
}
