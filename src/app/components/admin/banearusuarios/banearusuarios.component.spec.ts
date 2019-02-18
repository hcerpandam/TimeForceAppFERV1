import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanearusuariosComponent } from './banearusuarios.component';

describe('BanearusuariosComponent', () => {
  let component: BanearusuariosComponent;
  let fixture: ComponentFixture<BanearusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanearusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanearusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
