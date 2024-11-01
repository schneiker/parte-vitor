import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEntregadorPedidoAtribuidoComponent } from './dialog-entregador-pedido-atribuido.component';

describe('DialogEntregadorPedidoAtribuidoComponent', () => {
  let component: DialogEntregadorPedidoAtribuidoComponent;
  let fixture: ComponentFixture<DialogEntregadorPedidoAtribuidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEntregadorPedidoAtribuidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEntregadorPedidoAtribuidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
