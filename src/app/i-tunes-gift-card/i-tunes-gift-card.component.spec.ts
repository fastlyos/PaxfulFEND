import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITunesGiftCardComponent } from './i-tunes-gift-card.component';

describe('ITunesGiftCardComponent', () => {
  let component: ITunesGiftCardComponent;
  let fixture: ComponentFixture<ITunesGiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITunesGiftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITunesGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
