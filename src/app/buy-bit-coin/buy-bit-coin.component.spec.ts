import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBitCoinComponent } from './buy-bit-coin.component';

describe('BuyBitCoinComponent', () => {
  let component: BuyBitCoinComponent;
  let fixture: ComponentFixture<BuyBitCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBitCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBitCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
