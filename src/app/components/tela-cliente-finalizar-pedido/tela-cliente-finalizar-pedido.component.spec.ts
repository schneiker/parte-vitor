import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaClienteFinalizarPedidoComponent } from './tela-cliente-finalizar-pedido.component';

describe('TelaClienteFinalizarPedidoComponent', () => {
  let component: TelaClienteFinalizarPedidoComponent;
  let fixture: ComponentFixture<TelaClienteFinalizarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaClienteFinalizarPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaClienteFinalizarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
