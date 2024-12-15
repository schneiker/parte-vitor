import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregadoresComponent } from './entregadores.component';

describe('EntregadoresComponent', () => {
  let component: EntregadoresComponent;
  let fixture: ComponentFixture<EntregadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntregadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
