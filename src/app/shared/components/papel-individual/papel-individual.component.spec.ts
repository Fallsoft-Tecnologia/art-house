import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelIndividualComponent } from './papel-individual.component';

describe('PapelIndividualComponent', () => {
  let component: PapelIndividualComponent;
  let fixture: ComponentFixture<PapelIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapelIndividualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PapelIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
