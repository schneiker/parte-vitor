import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmeOPagamentoComponent } from './dialog-confirme-o-pagamento.component';

describe('DialogConfirmeOPagamentoComponent', () => {
  let component: DialogConfirmeOPagamentoComponent;
  let fixture: ComponentFixture<DialogConfirmeOPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogConfirmeOPagamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogConfirmeOPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
