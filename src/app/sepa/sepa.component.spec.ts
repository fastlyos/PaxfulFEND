import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEPAComponent } from './sepa.component';

describe('SEPAComponent', () => {
  let component: SEPAComponent;
  let fixture: ComponentFixture<SEPAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEPAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
