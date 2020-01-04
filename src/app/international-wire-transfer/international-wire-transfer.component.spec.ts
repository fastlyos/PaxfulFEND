import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalWireTransferComponent } from './international-wire-transfer.component';

describe('InternationalWireTransferComponent', () => {
  let component: InternationalWireTransferComponent;
  let fixture: ComponentFixture<InternationalWireTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalWireTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalWireTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
