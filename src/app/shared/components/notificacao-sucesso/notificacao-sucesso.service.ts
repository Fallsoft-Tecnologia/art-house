import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoSucessoService {

  private notificacaoSubject = new Subject<string>();

  notificacao$ = this.notificacaoSubject.asObservable();

  mostrarNotificacao(mensagem: string) {
    this.notificacaoSubject.next(mensagem);
  }
}
