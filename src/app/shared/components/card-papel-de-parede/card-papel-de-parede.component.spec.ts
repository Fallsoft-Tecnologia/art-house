import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPapelDeParedeComponent } from './card-papel-de-parede.component';

describe('CardPapelDeParedeComponent', () => {
  let component: CardPapelDeParedeComponent;
  let fixture: ComponentFixture<CardPapelDeParedeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPapelDeParedeComponent]
    });
    fixture = TestBed.createComponent(CardPapelDeParedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
