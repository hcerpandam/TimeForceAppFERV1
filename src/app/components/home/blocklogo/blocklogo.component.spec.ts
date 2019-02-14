import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklogoComponent } from './blocklogo.component';

describe('BlocklogoComponent', () => {
  let component: BlocklogoComponent;
  let fixture: ComponentFixture<BlocklogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocklogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocklogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
