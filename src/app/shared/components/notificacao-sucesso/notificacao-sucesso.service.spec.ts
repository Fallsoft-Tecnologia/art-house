import { TestBed } from '@angular/core/testing';

import { NotificacaoSucessoService } from './notificacao-sucesso.service';

describe('NotificacaoSucessoService', () => {
  let service: NotificacaoSucessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacaoSucessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
