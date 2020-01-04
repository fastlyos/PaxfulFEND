import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonGiftCardComponent } from './amazon-gift-card.component';

describe('AmazonGiftCardComponent', () => {
  let component: AmazonGiftCardComponent;
  let fixture: ComponentFixture<AmazonGiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonGiftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
