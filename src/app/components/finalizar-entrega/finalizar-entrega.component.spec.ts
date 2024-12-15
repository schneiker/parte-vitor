import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarEntregaComponent } from './finalizar-entrega.component';

describe('FinalizarEntregaComponent', () => {
  let component: FinalizarEntregaComponent;
  let fixture: ComponentFixture<FinalizarEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizarEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalizarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
