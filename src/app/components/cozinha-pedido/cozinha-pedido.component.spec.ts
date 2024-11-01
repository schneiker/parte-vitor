import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaPedidoComponent } from './cozinha-pedido.component';

describe('CozinhaPedidoComponent', () => {
  let component: CozinhaPedidoComponent;
  let fixture: ComponentFixture<CozinhaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CozinhaPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CozinhaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
