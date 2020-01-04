import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RIAmoneyTransferComponent } from './riamoney-transfer.component';

describe('RIAmoneyTransferComponent', () => {
  let component: RIAmoneyTransferComponent;
  let fixture: ComponentFixture<RIAmoneyTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RIAmoneyTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RIAmoneyTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
