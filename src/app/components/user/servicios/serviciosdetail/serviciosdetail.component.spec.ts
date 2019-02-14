import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosdetailComponent } from './serviciosdetail.component';

describe('ServiciosdetailComponent', () => {
  let component: ServiciosdetailComponent;
  let fixture: ComponentFixture<ServiciosdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
