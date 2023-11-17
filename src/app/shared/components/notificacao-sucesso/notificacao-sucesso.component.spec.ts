import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoSucessoComponent } from './notificacao-sucesso.component';

describe('NotificacaoSucessoComponent', () => {
  let component: NotificacaoSucessoComponent;
  let fixture: ComponentFixture<NotificacaoSucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificacaoSucessoComponent]
    });
    fixture = TestBed.createComponent(NotificacaoSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
