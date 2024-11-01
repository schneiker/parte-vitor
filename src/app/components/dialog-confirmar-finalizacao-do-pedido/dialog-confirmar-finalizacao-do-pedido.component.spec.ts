import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmarFinalizacaoDoPedidoComponent } from './dialog-confirmar-finalizacao-do-pedido.component';

describe('DialogConfirmarFinalizacaoDoPedidoComponent', () => {
  let component: DialogConfirmarFinalizacaoDoPedidoComponent;
  let fixture: ComponentFixture<DialogConfirmarFinalizacaoDoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogConfirmarFinalizacaoDoPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogConfirmarFinalizacaoDoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
