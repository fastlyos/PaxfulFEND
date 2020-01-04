import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlayGiftCardComponent } from './google-play-gift-card.component';

describe('GooglePlayGiftCardComponent', () => {
  let component: GooglePlayGiftCardComponent;
  let fixture: ComponentFixture<GooglePlayGiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePlayGiftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePlayGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
