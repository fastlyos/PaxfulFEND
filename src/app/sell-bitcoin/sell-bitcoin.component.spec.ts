import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellBitcoinComponent } from './sell-bitcoin.component';

describe('SellBitcoinComponent', () => {
  let component: SellBitcoinComponent;
  let fixture: ComponentFixture<SellBitcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellBitcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
