import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePedidoComponent } from './teste-pedido.component';

describe('TestePedidoComponent', () => {
  let component: TestePedidoComponent;
  let fixture: ComponentFixture<TestePedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestePedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
