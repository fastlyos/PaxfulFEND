import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDepositeToBankComponent } from './cash-deposite-to-bank.component';

describe('CashDepositeToBankComponent', () => {
  let component: CashDepositeToBankComponent;
  let fixture: ComponentFixture<CashDepositeToBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDepositeToBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDepositeToBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
