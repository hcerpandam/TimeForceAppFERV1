import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataprotectionlawComponent } from './dataprotectionlaw.component';

describe('DataprotectionlawComponent', () => {
  let component: DataprotectionlawComponent;
  let fixture: ComponentFixture<DataprotectionlawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataprotectionlawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataprotectionlawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
