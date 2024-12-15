import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaRecebidaComponent } from './entrega-recebida.component';

describe('EntregaRecebidaComponent', () => {
  let component: EntregaRecebidaComponent;
  let fixture: ComponentFixture<EntregaRecebidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregaRecebidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntregaRecebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
