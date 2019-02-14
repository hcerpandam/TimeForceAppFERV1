import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationformComponent } from './explanationform.component';

describe('ExplanationformComponent', () => {
  let component: ExplanationformComponent;
  let fixture: ComponentFixture<ExplanationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplanationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplanationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
