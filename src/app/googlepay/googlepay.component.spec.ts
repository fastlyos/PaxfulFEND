import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglepayComponent } from './googlepay.component';

describe('GooglepayComponent', () => {
  let component: GooglepayComponent;
  let fixture: ComponentFixture<GooglepayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglepayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
