import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialEntregadorComponent } from './tela-inicial-entregador.component';

describe('TelaInicialEntregadorComponent', () => {
  let component: TelaInicialEntregadorComponent;
  let fixture: ComponentFixture<TelaInicialEntregadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInicialEntregadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaInicialEntregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
