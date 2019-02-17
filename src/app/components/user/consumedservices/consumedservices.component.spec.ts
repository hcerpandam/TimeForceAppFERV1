import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedservicesComponent } from './consumedservices.component';

describe('ConsumedservicesComponent', () => {
  let component: ConsumedservicesComponent;
  let fixture: ComponentFixture<ConsumedservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumedservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumedservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
