import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCodigoClienteComponent } from './inserir-codigo-cliente.component';

describe('InserirCodigoClienteComponent', () => {
  let component: InserirCodigoClienteComponent;
  let fixture: ComponentFixture<InserirCodigoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirCodigoClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserirCodigoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
