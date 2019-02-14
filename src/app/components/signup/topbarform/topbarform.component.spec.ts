import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarformComponent } from './topbarform.component';

describe('TopbarformComponent', () => {
  let component: TopbarformComponent;
  let fixture: ComponentFixture<TopbarformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
