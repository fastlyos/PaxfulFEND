import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleXRPComponent } from './ripple-xrp.component';

describe('RippleXRPComponent', () => {
  let component: RippleXRPComponent;
  let fixture: ComponentFixture<RippleXRPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RippleXRPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleXRPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
