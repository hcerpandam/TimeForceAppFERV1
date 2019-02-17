import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateservicioComponent } from './createservicio.component';

describe('CreateservicioComponent', () => {
  let component: CreateservicioComponent;
  let fixture: ComponentFixture<CreateservicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateservicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
