import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirNomeComponent } from './inserir-nome.component';

describe('InserirNomeComponent', () => {
  let component: InserirNomeComponent;
  let fixture: ComponentFixture<InserirNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirNomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserirNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
