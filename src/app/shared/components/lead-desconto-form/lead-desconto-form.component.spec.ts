import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDescontoFormComponent } from './lead-desconto-form.component';

describe('LeadDescontoFormComponent', () => {
  let component: LeadDescontoFormComponent;
  let fixture: ComponentFixture<LeadDescontoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadDescontoFormComponent]
    });
    fixture = TestBed.createComponent(LeadDescontoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
