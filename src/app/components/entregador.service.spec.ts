import { TestBed } from '@angular/core/testing';

import { EntregadorService } from './entregador.service';

describe('EntregadorService', () => {
  let service: EntregadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntregadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
