import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCpfComponent } from './inserir-cpf.component';

describe('InserirCpfComponent', () => {
  let component: InserirCpfComponent;
  let fixture: ComponentFixture<InserirCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirCpfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserirCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
