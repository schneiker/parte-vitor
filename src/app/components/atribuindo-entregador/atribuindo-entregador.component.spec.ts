import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuindoEntregadorComponent } from './atribuindo-entregador.component';

describe('AtribuindoEntregadorComponent', () => {
  let component: AtribuindoEntregadorComponent;
  let fixture: ComponentFixture<AtribuindoEntregadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtribuindoEntregadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuindoEntregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
