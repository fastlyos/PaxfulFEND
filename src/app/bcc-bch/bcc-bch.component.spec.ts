import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCCBCHComponent } from './bcc-bch.component';

describe('BCCBCHComponent', () => {
  let component: BCCBCHComponent;
  let fixture: ComponentFixture<BCCBCHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCCBCHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCCBCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
