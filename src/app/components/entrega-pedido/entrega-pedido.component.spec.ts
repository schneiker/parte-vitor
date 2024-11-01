import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaPedidoComponent } from './entrega-pedido.component';

describe('EntregaPedidoComponent', () => {
  let component: EntregaPedidoComponent;
  let fixture: ComponentFixture<EntregaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregaPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntregaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
