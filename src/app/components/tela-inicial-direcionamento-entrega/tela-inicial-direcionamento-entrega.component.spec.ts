import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialDirecionamentoEntregaComponent } from './tela-inicial-direcionamento-entrega.component';

describe('TelaInicialDirecionamentoEntregaComponent', () => {
  let component: TelaInicialDirecionamentoEntregaComponent;
  let fixture: ComponentFixture<TelaInicialDirecionamentoEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInicialDirecionamentoEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaInicialDirecionamentoEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
