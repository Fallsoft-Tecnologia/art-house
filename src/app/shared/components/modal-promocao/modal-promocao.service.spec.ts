import { TestBed } from '@angular/core/testing';

import { ModalPromocaoService } from './modal-promocao.service';

describe('ModalPromocaoService', () => {
  let service: ModalPromocaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalPromocaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
