import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosmasterComponent } from './serviciosmaster.component';

describe('ServiciosmasterComponent', () => {
  let component: ServiciosmasterComponent;
  let fixture: ComponentFixture<ServiciosmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
