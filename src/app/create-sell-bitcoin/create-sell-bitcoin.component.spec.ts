import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSellBitcoinComponent } from './create-sell-bitcoin.component';

describe('CreateSellBitcoinComponent', () => {
  let component: CreateSellBitcoinComponent;
  let fixture: ComponentFixture<CreateSellBitcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSellBitcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSellBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
