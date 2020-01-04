import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInPersonComponent } from './cash-in-person.component';

describe('CashInPersonComponent', () => {
  let component: CashInPersonComponent;
  let fixture: ComponentFixture<CashInPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashInPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
