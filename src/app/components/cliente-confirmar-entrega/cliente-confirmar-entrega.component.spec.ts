import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteConfirmarEntregaComponent } from './cliente-confirmar-entrega.component';

describe('ClienteConfirmarEntregaComponent', () => {
  let component: ClienteConfirmarEntregaComponent;
  let fixture: ComponentFixture<ClienteConfirmarEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteConfirmarEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteConfirmarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
