import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEscolherEntregadorComponent } from './tela-escolher-entregador.component';

describe('TelaEscolherEntregadorComponent', () => {
  let component: TelaEscolherEntregadorComponent;
  let fixture: ComponentFixture<TelaEscolherEntregadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaEscolherEntregadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaEscolherEntregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
