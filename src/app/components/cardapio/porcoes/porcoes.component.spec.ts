import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcoesComponent } from './porcoes.component';

describe('PorcoesComponent', () => {
  let component: PorcoesComponent;
  let fixture: ComponentFixture<PorcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorcoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
