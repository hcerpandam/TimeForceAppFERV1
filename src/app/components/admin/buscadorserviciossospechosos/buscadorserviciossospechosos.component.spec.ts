import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorserviciossospechososComponent } from './buscadorserviciossospechosos.component';

describe('BuscadorserviciossospechososComponent', () => {
  let component: BuscadorserviciossospechososComponent;
  let fixture: ComponentFixture<BuscadorserviciossospechososComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorserviciossospechososComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorserviciossospechososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
