import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivosComponent } from './executivos.component';

describe('ExecutivosComponent', () => {
  let component: ExecutivosComponent;
  let fixture: ComponentFixture<ExecutivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
