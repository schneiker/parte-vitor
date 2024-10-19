import { TestBed } from '@angular/core/testing';

import { PedidoStatusService } from './pedido-status.service';

describe('PedidoStatusService', () => {
  let service: PedidoStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
