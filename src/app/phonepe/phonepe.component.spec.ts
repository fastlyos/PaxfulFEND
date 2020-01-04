import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonepeComponent } from './phonepe.component';

describe('PhonepeComponent', () => {
  let component: PhonepeComponent;
  let fixture: ComponentFixture<PhonepeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonepeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
