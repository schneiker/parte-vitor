import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregadorInfoClienteEPedidoComponent } from './entregador-info-cliente-e-pedido.component';

describe('EntregadorInfoClienteEPedidoComponent', () => {
  let component: EntregadorInfoClienteEPedidoComponent;
  let fixture: ComponentFixture<EntregadorInfoClienteEPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregadorInfoClienteEPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntregadorInfoClienteEPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
