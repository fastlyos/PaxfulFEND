import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBayGiftCardComponent } from './e-bay-gift-card.component';

describe('EBayGiftCardComponent', () => {
  let component: EBayGiftCardComponent;
  let fixture: ComponentFixture<EBayGiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBayGiftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBayGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
