import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPromocaoComponent } from './modal-promocao.component';

describe('ModalPromocaoComponent', () => {
  let component: ModalPromocaoComponent;
  let fixture: ComponentFixture<ModalPromocaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPromocaoComponent]
    });
    fixture = TestBed.createComponent(ModalPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
