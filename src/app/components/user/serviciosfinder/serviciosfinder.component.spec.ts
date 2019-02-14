import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosfinderComponent } from './serviciosfinder.component';

describe('ServiciosfinderComponent', () => {
  let component: ServiciosfinderComponent;
  let fixture: ComponentFixture<ServiciosfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
