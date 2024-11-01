import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialCozinhaComponent } from './tela-inicial-cozinha.component';

describe('TelaInicialCozinhaComponent', () => {
  let component: TelaInicialCozinhaComponent;
  let fixture: ComponentFixture<TelaInicialCozinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInicialCozinhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaInicialCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
