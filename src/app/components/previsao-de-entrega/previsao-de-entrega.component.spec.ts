import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaoDeEntregaComponent } from './previsao-de-entrega.component';

describe('PrevisaoDeEntregaComponent', () => {
  let component: PrevisaoDeEntregaComponent;
  let fixture: ComponentFixture<PrevisaoDeEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevisaoDeEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrevisaoDeEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
