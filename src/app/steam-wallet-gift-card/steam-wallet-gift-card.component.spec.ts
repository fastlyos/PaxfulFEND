import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamWalletGiftCardComponent } from './steam-wallet-gift-card.component';

describe('SteamWalletGiftCardComponent', () => {
  let component: SteamWalletGiftCardComponent;
  let fixture: ComponentFixture<SteamWalletGiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamWalletGiftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamWalletGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
