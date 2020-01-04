import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LTCComponent } from './ltc.component';

describe('LTCComponent', () => {
  let component: LTCComponent;
  let fixture: ComponentFixture<LTCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LTCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
