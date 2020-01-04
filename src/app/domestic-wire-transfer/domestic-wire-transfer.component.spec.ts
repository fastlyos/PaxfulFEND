import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticWireTransferComponent } from './domestic-wire-transfer.component';

describe('DomesticWireTransferComponent', () => {
  let component: DomesticWireTransferComponent;
  let fixture: ComponentFixture<DomesticWireTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticWireTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticWireTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
