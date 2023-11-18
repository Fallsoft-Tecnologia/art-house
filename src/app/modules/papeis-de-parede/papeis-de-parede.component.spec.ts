import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapeisDeParedeComponent } from './papeis-de-parede.component';

describe('PapeisDeParedeComponent', () => {
  let component: PapeisDeParedeComponent;
  let fixture: ComponentFixture<PapeisDeParedeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapeisDeParedeComponent]
    });
    fixture = TestBed.createComponent(PapeisDeParedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
