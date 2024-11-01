import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEntregadorComponent } from './painel-entregador.component';

describe('PainelEntregadorComponent', () => {
  let component: PainelEntregadorComponent;
  let fixture: ComponentFixture<PainelEntregadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelEntregadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelEntregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
