import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysafecardComponent } from './paysafecard.component';

describe('PaysafecardComponent', () => {
  let component: PaysafecardComponent;
  let fixture: ComponentFixture<PaysafecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysafecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysafecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
